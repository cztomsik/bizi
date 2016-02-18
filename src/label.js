import Component from './component';
import Element from './_element';
import css from './_css';

class Label extends Component{
  init({text, cls}){
    this.labelCls = css(cls, 'control-label', 'show', 'text-muted');
    this.text = text;
  }
}

Label.tpl = [Element, {
  tagName: 'label',
  className: '= labelCls',
  innerText: '= text'
}];

export default Label;
