import $ from 'jquery';

class Heading{
  constructor(opts){
    this.$el = $('<h2>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  // doesnt happend that much (we dont always render everything)
  reset(opts){
    this.$el.text(opts.text);

    if (opts.smallText){
      if (opts.br !== 'false'){
        this.$el.append('<br>');
      }

      this.$el.append($('<small>').text(opts.smallText));
    }
  }
}

export default Heading;
