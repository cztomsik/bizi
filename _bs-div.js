import $ from 'jquery';
import css from './_css';

class BsDiv{
  constructor(opts){
    this.$el = $('<div>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el
      .attr('class', css.bsClass(opts))
      .empty()
      .append(opts.children.map(c => c.el));
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default BsDiv;