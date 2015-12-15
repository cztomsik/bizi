/**
 * Base class for high-level components
 *
 * @param opts
 */
class Component{
  constructor(opts){
    this.init(opts);

    Object.defineProperty(this, 'comps', {
      enumerable: false,
      value: []
    });

    Object.defineProperty(this, 'bindings', {
      enumerable: false,
      value: []
    });

    // TODO: meaningful stack trace
    Object.defineProperty(this, 'el', {
      enumerable: false,
      value: applyTpl.apply(this, this.constructor.tpl).el
    });

    // debug
    this.el.comp = this;
  }

  /**
   * Intialize state during object construction/reset
   *
   * @param opts
   */
  init(opts){
    Object.assign(this, opts);
  }

  /**
   * Called by owner (databinding)
   *
   * @param  opts
   */
  reset(opts){
    for (let k in this){
      this[k] = undefined;
    }

    this.init(opts);
    this.update();
  }

  update(){
    // should be enough (triggers reset which in turn should update $el)
    this.bindings.forEach((updateBinding) => {
      updateBinding();
    });
  }

  destroy(){
    this.comps.forEach((c) => {
      c.destroy();
    });
    this.comps = null;
    this.bindings = null;
  }
}

function applyTpl(Comp, opts = {}, ...children){
  const boundOpts = {};

  // shared (from tpl), we need to make a copy
  opts = Object.assign({}, opts);

  if ( ! ('children' in opts)){
    opts.children = children.map((tpl) => {
      return applyTpl.apply(this, tpl);
    });
  }

  for (let k in opts){
    opts[k] = resolveOpt(opts[k], k, this);
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
        return () => {
          comp[methName].apply(comp, arguments);
          comp.update();
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

export default Component;
