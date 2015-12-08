class Component{
  constructor(opts){
    this.init(opts);

    Object.defineProperty(this, '_view', {
      enumerable: false,
      value: createView(this.constructor.tpl, this)
    });
  }

  // override/replace if you wish
  init(opts){
    Object.assign(this, opts);
  }

  // useful for testing
  update(){
    this._view.update();
  }

  reset(opts){
    for (let k in this){
      this[k] = undefined;
    }

    this.init(opts);
    this.update();
  }

  destroy(){
    this._view.destroy();
  }

  get $el(){
    return this._view.$el;
  }
}

function createView(tpl, viewModel){
  let components = [];
  let bindings = [];

  try{
    instantiate.apply(null, tpl);
  } catch(e){
    console.error('Could not create view', tpl, viewModel);
    throw e;
  }

  return {
    get $el(){
      return components[0].$el;
    },

    update(){
      // should be enough (triggers reset which in turn should update $el)
      bindings.forEach((updateBinding) => {
        updateBinding();
      });
    },

    destroy(){
      components.forEach((c) => {
        c.destroy();
      });

      components = null;
      bindings = null;
    }
  };

  function instantiate(Comp, opts = {}, ...children){
    const boundOpts = {};

    for (let k in opts){
      opts[k] = resolveOpt(opts[k], k, opts);
    }

    opts.children = children.map((tpl) => {
      return instantiate.apply(null, tpl);
    });

    const c = new Comp(opts);

    for (let k in boundOpts){
      bindings.unshift(watch(boundOpts[k], (v) => {
        opts[k] = v;
        c.reset(opts);
      }));
    }

    components.unshift(c);

    return c;


    function resolveOpt(v, propName, opts){
      if (typeof v === 'string'){
        if (v.startsWith('() ')){
          return viewModel[v.slice(3)].bind(viewModel);
        }

        if (v.startsWith('= ')){
          const expression = createExpression(v.slice(2));
          boundOpts[propName] = expression;

          return expression();
        }
      }

      return v;
    }
  }


  function createExpression(expStr){
    /* jshint evil: true */
    return new Function('data', 'return data.' + expStr).bind(null, viewModel);
  }
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

export default Component;
