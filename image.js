import $ from 'jquery';

class Image{
  constructor(opts){
    this.$el = $('<img>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el.attr({
      class: opts.cssClass,
      src: opts.src
    });
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default Image;
