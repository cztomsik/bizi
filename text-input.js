import Component from './component';
import FormControl from './_form-control';

class TextInput extends Component{
  init({cls, value, onValue}){
    this.cls = cls;
    this.value = value;
    this.onValue = onValue;
  }
}

TextInput.tpl = [FormControl, {
  tagName: 'input',
  cls: '= cls',
  value: '= value',
  onValue: '= onValue'
}];

export default TextInput;
