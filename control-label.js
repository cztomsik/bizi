import Component from './component';
import Element from './_element';
import css from './_css';

class ControlLabel extends Component{
  init({text, cssClass}){
    this.text = text;
    this.cssClass = cssClass;
  }

  get labelCssClass(){
    return css.for(this.cssClass, 'control-label');
  }
}

ControlLabel.tpl = [Element, {
  tagName: 'label',
  className: '= labelCssClass',
  innerText: '= text'
}];

export default ControlLabel;
