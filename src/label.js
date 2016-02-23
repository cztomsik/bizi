import Component from './component';
import Element from './_element';
import _css from './_css';

class Label extends Component{
  init({text, css}){
    this.labelCss = _css(css, 'control-label', 'show', 'text-muted');
    this.text = text;
  }
}

Label.tpl = [Element, {
  tagName: 'label',
  className: '= labelCss',
  innerText: '= text'
}];

export default Label;
