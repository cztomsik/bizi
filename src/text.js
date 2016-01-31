import Component from './component';
import Element from './_element';
import css from './_css';

class Text extends Component{
  init({value, type, cls}){
    this.spanCls = css.join(css.filter(cls, ...css.prefix('text', type)));
    this.value = value;
  }
}

Text.tpl = [Element, {
  tagName: 'span',
  className: '= spanCls',
  innerText: '= value'
}];

export default Text;
