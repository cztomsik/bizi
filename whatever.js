import $ from 'jquery';

class Whatever{
  constructor(opts){
    this.$el = $(opts.html);
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default Whatever;