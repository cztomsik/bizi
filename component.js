/**
 * Base class for high-level components
 *
 * Intented usage:
 *
 *     import * as b from 'bizi';
 *
 *     class Counter extends b.Component{
 *       init(){
 *         this.count = 0;
 *       }
 *
 *       dec(){
 *         this.count--;
 *       }
 *
 *       inc(){
 *         this.count++;
 *       }
 *     }
 *
 *     Counter.tpl = [b.Well, {},
 *       [b.Text, {value: '= count'}],
 *       [b.Btn, {text: '--', onClick: '() dec'}],
 *       [b.Btn, {text: '++', onClick: '() inc'}]
 *     ];
 *
 * @param opts
 */
class Component{
  constructor(opts){
    this.init(opts);

    this.comps = [];
    this.bindings = [];

    // TODO: meaningful stack trace
    this.el = applyTpl.apply(this, this.constructor.tpl).el;

    // debug
    this.el.comp = this;

    Object.seal(this);

    this.update();
  }

  /**
   * Set *all* your props to initial state
   * - instance will be sealed then
   * - called during object construction/reset
   *
   * @see Object.seal()
   * @param opts
   */
  init(opts){}

  /**
   * Re-initialize whole state with with new opts.
   * - instead of doing it partially in setters
   * - called by owner for data-bound changes
   *
   * @param opts
   */
  reset(opts){
    this.init(opts);
    this.update();
  }

  update(){
    // if component was destroyed during change
    if ( ! this.el){
      return;
    }

    // should be enough (triggers reset which in turn should update $el)
    this.bindings.forEach((updateBinding) => {
      updateBinding();
    });
  }

  /**
   * Do clean-up here (listeners). Don't forget to call super.destroy() when finished
   */
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
        // regular function because of `arguments` visibility
        return function(){
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
