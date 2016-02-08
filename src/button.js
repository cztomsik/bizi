import Component from './component';
import Element from './_element';
import css from './_css';

class Button extends Component{
  init({type = 'default', size, text, cls, onClick}){
    this.buttonCls = css.for(cls, 'btn', type, size);
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
