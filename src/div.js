import $ from 'jquery';
import Component from './component';
import Element from './_element';

class Div extends Component{
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

Div.tpl = [Element, {
  tagName: 'div',
  className: '= cls'
}];

export default Div;
