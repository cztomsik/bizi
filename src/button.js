import Component from './component';
import Element from './_element';
import css from './_css';

class Button extends Component{
  init({text, cls, onClick}){
    this.buttonCls = css(cls, 'btn', 'btn-default');
    this.text = text;
    this.onClick = onClick;
  }
}

Button.tpl = [Element, {
  tagName: 'button',
  type: 'button',
  innerText: '= text',
  className: '= buttonCls',
  onclick: '= onClick'
}];

export default Button;
