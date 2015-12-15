import $ from 'jquery';

class Div{
  constructor(opts){
    this.$el = $('<div>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el
      .attr('class', opts.cssClass)
      .empty()
      .append(opts.children.map(c => c.el));
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default Div;