import Component from './component';
import Input from './input';

class FormControlInput extends Component{
  init({type, cssClass, value, onValue}){
    this.type = type;
    this.cssClass = cssClass;
    this.value = value;
    this.onValue = onValue;
  }

  get inputCssClass(){
    return `form-control ${this.cssClass}`;
  }

  onInputChange(e){
    this.onValue(e.target.value);
  }
}

FormControlInput.tpl = [Input, {
  type: '= type',
  className: '= inputCssClass',
  value: '= value',
  onChange: '() onInputChange'
}];

export default FormControlInput;
