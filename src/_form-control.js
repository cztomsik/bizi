import Component from './component';
import Element from './_element';
import css from './_css';

class FormControl extends Component{
  init({tagName, cls, placeholder, value, onValue}){
    this.tagName = tagName;
    this.controlCls = css.for(cls, 'form-control');
    this.placeholder = placeholder;
    this.value = value;
    this.onValue = onValue;
  }

  controlChange(e){
    this.onValue(e.target.value);
  }
}

FormControl.tpl = [Element, {
  tagName: '= tagName',
  className: '= controlCls',
  placeholder: '= placeholder',
  value: '= value',
  onchange: '() controlChange'
}];

export default FormControl;
