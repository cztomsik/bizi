import Component from './component';
import FormControl from './_form-control';

class TextInput extends Component{
  init({cls, value, onValue}){
    this.cls = cls;
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
  value: '= inputValue',
  onValue: '= onValue'
}];

export default TextInput;
