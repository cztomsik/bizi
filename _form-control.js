import Component from './component';
import Element from './_element';

class FormControl extends Component{
  init({tagName, cls, value, onValue}){
    this.tagName = tagName;
    this.cls = cls;
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
  value: '= value',
  onchange: '() controlChange'
}];

export default FormControl;
