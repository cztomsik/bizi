import Component from './component';
import Element from './_element';

class Text extends Component{
  init({value, cssClass}){
    this.value = value;
    this.cssClass = cssClass;
  }
}

Text.tpl = [Element, {
  tagName: 'span',
  className: '= cssClass',
  innerText: '= value'
}];

export default Text;
