import $ from 'jquery';

class NavItem{
  constructor(opts){
    this.$el = $('<li><a></li>');
    this.$a = this.$el.find('a');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$a.text(opts.text);
    this.$a[0].onclick = opts.onClick;
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
    this.$a = null;
  }
}

export default NavItem;
