import Component from './component';
import Input from './input';

class FormControlInput extends Component{
  init({type, cssClass, value, onChange}){
    this.type = type;
    this.cssClass = cssClass;
    this.value = value;
    this.onChange = onChange;
  }

  get inputCssClass(){
    return `form-control ${this.cssClass}`;
  }
}

FormControlInput.tpl = [Input, {
  type: '= type',
  className: '= inputCssClass',
  value: '= value',
  onChange: '= onChange'
}];

export default FormControlInput;
