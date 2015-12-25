import $ from 'jquery';
import Component from './component';
import Element from './_element';

class Form extends Component{
  init({children, cls}){
    this.children = children;
    this.cls = cls;
  }

  render(){
    super.render();

    const $el = $(this.el);

    $el.empty();
    $el.append(this.children.map(c => c.el));
  }
}

Form.tpl = [Element, {
  tagName: 'form',
  className: '= cls'
}];

export default Form;