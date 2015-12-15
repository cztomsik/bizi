import Component from './component';
import Input from './input';

class FormControlInput extends Component{
  get inputCssClass(){
    return `form-control ${this.cssClass}`;
  }
}

FormControlInput.tpl = [Input, {
  cssClass: '= inputCssClass',
  value: '= value'
}];

export default FormControlInput;
