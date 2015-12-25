import Component from './component';
import Element from './_element';
import css from './_css';

class Btn extends Component{
  init({type = 'default', text, cls, onClick}){
    this.type = type;
    this.text = text;
    this.cls = cls;
    this.onClick = onClick;
  }

  get buttonCls(){
    return css.for(this.cls, 'btn', this.type);
  }
}

Btn.tpl = [Element, {
  tagName: 'button',
  innerText: '= text',
  className: '= buttonCls',
  onclick: '= onClick'
}];

export default Btn;
