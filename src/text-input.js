import Component from './component';
import FormControl from './_form-control';

class TextInput extends Component{
  init({cls, placeholder, value, onValue}){
    this.cls = cls;
    this.placeholder = placeholder;
    this.value = value;
    this.onValue = onValue;
  }

  get inputValue(){
    return (this.value === null) ?'' :this.value;
  }
}

TextInput.tpl = [FormControl, {
  tagName: 'input',
  cls: '= cls',
  placeholder: '= placeholder',
  value: '= inputValue',
  onValue: '= onValue'
}];

export default TextInput;
