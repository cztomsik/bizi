import Component from './component';
import Element from './_element';
import css from './_css';

class Button extends Component{
  init({text, bg = 'default', size = 'md', cls, onClick}){
    this.buttonCls = css(cls, 'btn', `btn-${bg}`, `btn-${size}`);
    this.text = text;
    this.onClick = onClick;
  }
}

Button.tpl = [Element, {
  tagName: 'button',
  innerText: '= text',
  className: '= buttonCls',
  onclick: '= onClick'
}];

export default Button;
