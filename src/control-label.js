import Component from './component';
import Element from './_element';
import css from './_css';

class ControlLabel extends Component{
  init({text, cls}){
    this.labelCls = css.for(cls, 'control-label');
    this.text = text;
  }
}

ControlLabel.tpl = [Element, {
  tagName: 'label',
  className: '= labelCls',
  innerText: '= text'
}];

export default ControlLabel;
