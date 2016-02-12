class View{
  constructor({tpl, model}){
    this.tpl = tpl;
    this.model = model;

    this.comps = [];
    this.bindings = [];

    // TODO: meaningful stack trace
    this.el = applyTpl.apply(this, tpl).el;

    // useful for debugging:
    // - inspect element
    // - leaked DOM element
    // you should not use it to get component instances
    this.el.biziComp = this;
  }

  render(){
    // should be enough (triggers reset which in turn should update $el)
    this.bindings.forEach((updateBinding) => {
      updateBinding();
    });
  }

  reset(opts){
    // replacing element might cause a lot of headache
    // so at least for now the philosophy is to have
    // static template/element structure
    if (this.tpl !== opts.tpl){
      throw new Error('dynamic views are not supported');
    }

    this.destroy();
    this.constructor.call(this, opts);
  }

  destroy(){
    this.el.biziComp = null;
    this.el = null;

    this.comps.forEach((c) => {
      c.destroy();
    });

    for (var k in this){
      this[k] = null;
    }
  }
}

function applyTpl(Comp, opts = {}, ...children){
  const boundOpts = {};

  // shared (from tpl), we need to make a copy
  opts = Object.assign({}, opts);

  if (( ! ('children' in opts)) && children.length){
    opts.children = children.map((tpl) => {
      return applyTpl.apply(this, tpl);
    });
  }

  // `& obj.prop` shortcut
  for (let k in opts){
    var v = opts[k];

    if ((typeof v === 'string') && v.startsWith('& ')){
      opts[k] = '=' + v.slice(1);
      opts['on' + k.slice(0, 1).toUpperCase() + k.slice(1)] = setter(this.model, v.slice(2));
    }
  }

  for (let k in opts){
    opts[k] = resolveOpt(opts[k], k, this.model);
  }

  try {
    const c = new Comp(opts);

    for (let k in boundOpts){
      this.bindings.unshift(watch(boundOpts[k], (v) => {
        opts[k] = v;
        c.reset(opts);
      }));
    }

    this.comps.push(c);

    return c;
  } catch (e) {
    console.error(JSON.stringify(this.tpl, (k, v) => {
      if (v instanceof Function){
        return v.name;
      }

      return v;
    }, 2));
    throw e;
  }


  function resolveOpt(v, propName, comp){
    if (typeof v === 'string'){
      if (v.startsWith('() ')){
        const methName = v.slice(3);

        // TODO: reconsider this - closure will be shown in stacktrace
        // regular function because of `arguments` visibility
        return function(){
          const res = comp[methName].apply(comp, arguments);
          rerender();

          if (res && res.then){
            res.then(rerender);
          }
        };

        function rerender(){
          // if component was destroyed during change
          if ( ! comp.el){
            return;
          }

          comp.render();
        }
      }

      if (v.startsWith('= ')){
        const expression = createExpression(v.slice(2), comp);
        boundOpts[propName] = expression;

        return expression();
      }
    }

    return v;
  }
}

function createExpression(expStr, comp){
  /* jshint evil: true */
  return new Function('data', 'return data.' + expStr).bind(null, comp);
}

function watch(resolve, listener){
  let oldVal = resolve();

  return () => {
    let val = resolve();

    if (val !== oldVal){
      listener(val);
      oldVal = val;
    }
  };
}

function setter(obj, path){
  return new Function('obj, v', 'obj.' + path + ' = v; obj.render();').bind(null, obj);
}

export default View;
