import $ from 'jquery';

class Heading{
  constructor(opts){
    this.$el = $('<h3>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el.text(opts.text);
  }
}

export default Heading;
