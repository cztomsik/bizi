import $ from 'jquery';
import Component from './component';
import Element from './_element';

class Div extends Component{
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

Div.tpl = [Element, {
  tagName: 'div',
  className: '= cssClass'
}];

export default Div;