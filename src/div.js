import Component from './component';
import Element from './_element';

class Div extends Component{
  init({children, cls}){
    this.children = children;
    this.cls = cls;
  }
}

Div.tpl = [Element, {
  tagName: 'div',
  className: '= cls',
  children: '= children'
}];

export default Div;
