import Component from './component';
import Element from './_element';
import css from './_css';

class Span extends Component{
  init({text, type, cls}){
    this.spanCls = css(cls, `text-${type}`);
    this.text = text || '';
  }
}

Span.tpl = [Element, {
  tagName: 'span',
  className: '= spanCls',
  innerText: '= text'
}];

export default Span;
