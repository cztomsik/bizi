import $ from 'jquery';

class ControlLabel{
  constructor(opts){
    this.$el = $('<label>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el.text(opts.text);
    this.$el.attr('class', 'control-label ' + opts.cssClass);
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default ControlLabel;
