import $ from 'jquery';

class Input{
  constructor(opts){
    this.$el = $('<input>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el.attr({
      type: opts.type,
      class: opts.cssClass
    });

    this.el.onChange = opts.onChange;
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default Input;
