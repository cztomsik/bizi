import $ from 'jquery';
import Component from './component';
import Whatever from './whatever';

class Btn extends Component{
  constructor(opts){
    super(opts);
    this.$el.on('click', opts.onClick);
    this.update();
  }

  update(){
    this.$el.text(this.text);
  }
}

Btn.tpl = [Whatever, {
  html: `
    <button class="btn btn-default"></button>
  `
}];

export default Btn;