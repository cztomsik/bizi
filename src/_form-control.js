import Component from './component';
import Element from './_element';

class FormControl extends Component{
  init({tagName, cls, placeholder, value, onValue}){
    this.tagName = tagName;
    this.cls = cls;
    this.placeholder = placeholder;
    this.value = value;
    this.onValue = onValue;
  }

  get controlCls(){
    return `form-control ${this.cls}`;
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
