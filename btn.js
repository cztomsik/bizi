import $ from 'jquery';

class Btn{
  constructor(opts){
    this.$el = $('<button class="btn btn-default"></button>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el.text(opts.text);
    this.el.onclick = opts.onClick;
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default Btn;
