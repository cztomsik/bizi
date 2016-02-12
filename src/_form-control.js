import Component from './component';
import Element from './_element';
import css from './_css';

class FormControl extends Component{
  init({tagName, value, placeholder, cls, onValue}){
    this.controlCls = css(cls, 'form-control');

    this.tagName = tagName;
    this.value = value || '';
    this.placeholder = placeholder;
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
