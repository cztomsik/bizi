import $ from 'jquery';
import bsClass from './_bs-class';

class BsDiv{
  constructor(opts){
    this.$el = $('<div>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el
      .attr('class', bsClass(opts))
      .empty()
      .append(opts.children.map(c => c.el));
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default BsDiv;