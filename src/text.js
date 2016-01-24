import Component from './component';
import Element from './_element';
import css from './_css';

class Text extends Component{
  init({value, type, cls}){
    // primary, success, info, warning, danger
    this.type = type;

    this.value = value;
  }

  get spanCls(){
    return css.join(css.filter(this.cls, ...css.prefix('text', this.type)));
  }
}

Text.tpl = [Element, {
  tagName: 'span',
  className: '= spanCls',
  innerText: '= value'
}];

export default Text;
