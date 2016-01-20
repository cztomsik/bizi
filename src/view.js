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
    // if component was destroyed during change
    if ( ! this.el){
      return;
    }

    // should be enough (triggers reset which in turn should update $el)
    this.bindings.forEach((updateBinding) => {
      updateBinding();
    });
  }

  reset(){
    throw new Error('dynamic views are not supported');
  }

  destroy(){
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

  const c = new Comp(opts);

  for (let k in boundOpts){
    this.bindings.unshift(watch(boundOpts[k], (v) => {
      opts[k] = v;
      c.reset(opts);
    }));
  }

  this.comps.push(c);

  return c;


  function resolveOpt(v, propName, comp){
    if (typeof v === 'string'){
      if (v.startsWith('() ')){
        const methName = v.slice(3);

        // TODO: reconsider this - closure will be shown in stacktrace
        // regular function because of `arguments` visibility
        return function(){
          const res = comp[methName].apply(comp, arguments);
          comp.render();

          if (res && res.then){
            res.then(() => {
              comp.render();
            });
          }
        };
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
