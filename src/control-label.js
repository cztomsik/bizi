import Component from './component';
import Element from './_element';
import css from './_css';

class ControlLabel extends Component{
  init({text, cls}){
    this.text = text;
    this.cls = cls;
  }

  get labelCls(){
    return css.for(this.cls, 'control-label');
  }
}

ControlLabel.tpl = [Element, {
  tagName: 'label',
  className: '= labelCls',
  innerText: '= text'
}];

export default ControlLabel;
