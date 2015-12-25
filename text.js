import Component from './component';
import Element from './_element';

class Text extends Component{
  init({value, cls}){
    this.value = value;
    this.cls = cls;
  }
}

Text.tpl = [Element, {
  tagName: 'span',
  className: '= cls',
  innerText: '= value'
}];

export default Text;
