import View from './view';

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
 *       [b.Span, {text: '= count'}],
 *       [b.Btn, {text: '--', onClick: '() dec'}],
 *       [b.Btn, {text: '++', onClick: '() inc'}]
 *     ];
 *
 * @param opts
 */
class Component{
  constructor(opts){
    const res = this.init(opts);

    this._biziView = new View({tpl: this.constructor.tpl, model: this});
    this.el = this._biziView.el;

    this.render();

    if (res && res.then){
      res.then(() => {
        this.render();
      });
    }
  }

  /**
   * Set *all* your props to initial state
   * - called during object construction/reset
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
    this.render();
  }

  render(){
    this._biziView.render();
  }

  /**
   * Do clean-up here (listeners). Don't forget to call super.destroy() when finished
   */
  destroy(){
    this.el = null;
    this._biziView.destroy();
    this._biziView = null;
  }
}

export default Component;
