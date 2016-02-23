import Component from './component';
import Element from './_element';
import _css from './_css';

class Span extends Component{
  init({text, type, css}){
    this.spanCss = _css(css, `text-${type}`);
    this.text = text || '';
  }
}

Span.tpl = [Element, {
  tagName: 'span',
  className: '= spanCss',
  innerText: '= text'
}];

export default Span;
