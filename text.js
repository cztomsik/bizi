import $ from 'jquery';

class Text{
  constructor(opts){
    this.$el = $('<span>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el.text(opts.value);
    this.$el.attr('class', opts.cssClass);
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default Text;
