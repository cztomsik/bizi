import Component from './component';
import Element from './_element';
import css from './_css';

class Btn extends Component{
  init({type = 'default', text, cssClass, onClick}){
    this.type = type;
    this.text = text;
    this.cssClass = cssClass;
    this.onClick = onClick;
  }

  get buttonCssClass(){
    return css.for(this.cssClass, 'btn', this.type);
  }
}

Btn.tpl = [Element, {
  tagName: 'button',
  innerText: '= text',
  className: '= buttonCssClass',
  onclick: '= onClick'
}];

export default Btn;
