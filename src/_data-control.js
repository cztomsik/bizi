import _ from 'lodash';
import $ from 'jquery';

import {Control} from './_control';

// TODO: resize (offsetTop)
// TODO: virtual should be optional

/**
 * @private not useful from markup
 */
export class DataControl extends Control{
  init(){
    this.itemViews = [];

    this.scrollTarget = null;
    this.scrollParent = null;
    this.offsetTop = 0;

    this.virtualOffset = 0;

    // TODO: detect, onresize
    this.virtualSize = 20;
  }

  select(v){
    this.value = v;
    this.render();
    this.change();
  }

  render(){
    // first render
    if ( ! this.scrollTarget){
      // TODO: transclude (what if we're not attached?)
      this.scrollParent = _.find($(this.getElement()).parents(), (el) => {
        const overflow = window.getComputedStyle(el)['overflow-y'];
        return (overflow === 'scroll') || (overflow === 'auto');
      }) || document.body;

      this.scrollTarget = (this.scrollParent === document.body) ?window :this.scrollParent;
      this.scrollTarget.addEventListener('scroll', _.bindKey(this, 'domScroll'), {passive: true});

      // TODO: can change on resize
      this.offsetTop = this.getElement().offsetTop;
    }

    this.renderItems();
    super.render();

    // render style
    this.renderVirtual(0);
  }

  getVisibleItems(){
    return _.slice(this.options.items, this.virtualOffset, this.virtualOffset + this.virtualSize);
  }

  // LATER: new array instances -> items are re-appended each time
  getItemElements(){
    return _.map(this.itemViews, _.method('getElement'));
  }

  renderItems(){
    const prev = _.keyBy(this.itemViews, _.property('options.key'));

    this.itemViews = _.map(this.getVisibleItems(), (it, i) => {
      // TODO
      const k = it.id || i;

      let view = prev[k] || this.createItemView(it);

      this.renderItemView(view, it);

      delete prev[k];

      return view;
    });

    _.forEach(prev, _.method('destroy'));

    _.forEach(this.itemViews, _.method('render'));
  }

  // virtual is all about speed and CHEATING so:
  // - it intentionally skips tracking
  // - items are only "rotated" around
  renderVirtual(delta){
    // scroll down (move els from up to the bottom)
    if (delta > 0){
      _.times(delta, () => {
        this.virtualOffset++;

        const it = this.itemViews.shift();
        const item = this.options.items[this.virtualOffset + this.virtualSize - 1];

        this.itemViews.push(it);
        it.applyOptions({item: item});
        this.renderItemView(it, item);
        it.render();
        this.getElement().appendChild(it.getElement());
      });
    } else {
      _.times(-delta, () => {
        this.virtualOffset--;

        const it = this.itemViews.pop();
        const item = this.options.items[this.virtualOffset];

        this.itemViews.unshift(it);
        it.applyOptions({item: item});
        this.renderItemView(it, item);
        it.render();
        $(this.getElement()).prepend(it.getElement());
      });
    }

    const style = this.getElement().style;

    style.paddingTop = (this.virtualOffset * this.options.virtualHeight) + 'px';
    style.paddingBottom = ((this.options.items.length - this.virtualSize - this.virtualOffset) * this.options.virtualHeight) + 'px';
  }

  // LATER: raf
  // LATER: profile getBoundRect() vs. scrollTop & consider managing own "scrollTop"
  // (rect itself is useless)
  domScroll(e){
    const top = this.scrollParent.scrollTop - this.offsetTop - this.options.virtualHeight;
    const topOff = Math.floor(top / this.options.virtualHeight);
    const delta =  Math.max(0, Math.min(this.options.items.length - this.virtualSize, topOff)) - this.virtualOffset;

    this.renderVirtual(delta);
  }
}

DataControl.setDefaults({
  items: [],
  virtualHeight: 30
});
