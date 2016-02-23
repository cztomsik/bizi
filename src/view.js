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

  reset(options){
    // replacing element might cause a lot of headache
    // so at least for now the philosophy is to have
    // static template/element structure
    if (this.tpl !== options.tpl){
      throw new Error('dynamic views are not supported');
    }

    this.destroy();
    this.constructor.call(this, options);
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

function applyTpl(Comp, options = {}, ...children){
  const boundOpts = {};

  // shared (from tpl), we need to make a copy
  options = Object.assign({}, options);

  if (( ! ('children' in options)) && children.length){
    options.children = children.map((tpl) => {
      return applyTpl.apply(this, tpl).el;
    });
  }

  // `& obj.prop` shortcut
  for (let k in options){
    var v = options[k];

    if ((typeof v === 'string') && v.startsWith('& ')){
      options[k] = '=' + v.slice(1);
      options['on' + k.slice(0, 1).toUpperCase() + k.slice(1)] = setter(this.model, v.slice(2));
    }
  }

  for (let k in options){
    options[k] = resolveOpt(options[k], k, this.model);
  }

  try {
    const c = new Comp(options);

    for (let k in boundOpts){
      this.bindings.unshift(watch(boundOpts[k], (v) => {
        options[k] = v;
        c.reset(options);
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
