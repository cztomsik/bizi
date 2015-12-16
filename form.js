import $ from 'jquery';
import Component from './component';
import Element from './_element';

class Form extends Component{
  init({children, cssClass}){
    this.children = children;
    this.cssClass = cssClass;
  }

  update(){
    super.update();

    const $el = $(this.el);

    $el.empty();
    $el.append(this.children.map(c => c.el));
  }
}

Form.tpl = [Element, {
  tagName: 'form',
  className: '= cssClass'
}];

export default Form;