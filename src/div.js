import Component from './component';
import Element from './_element';

class Div extends Component{
  init({children, css}){
    this.children = children;
    this.css = css;
  }
}

Div.tpl = [Element, {
  tagName: 'div',
  className: '= css',
  children: '= children'
}];

export default Div;
