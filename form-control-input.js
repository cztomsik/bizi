import Component from './component';
import Input from './input';

class FormControlInput extends Component{
  init({type, cls, value, onValue}){
    this.type = type;
    this.cls = cls;
    this.value = value;
    this.onValue = onValue;
  }

  get inputCls(){
    return `form-control ${this.cls}`;
  }

  onInputChange(e){
    this.onValue(e.target.value);
  }
}

FormControlInput.tpl = [Input, {
  type: '= type',
  className: '= inputCls',
  value: '= value',
  onChange: '() onInputChange'
}];

export default FormControlInput;
