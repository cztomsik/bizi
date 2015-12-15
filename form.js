import $ from 'jquery';

class Form{
  constructor(opts){
    this.$el = $('<form>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el
      .empty()
      .append(opts.children.map(c => c.el));
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default Form;