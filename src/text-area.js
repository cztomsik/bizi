import Component from './component';
import FormControl from './_form-control';

class TextArea extends Component{
  init({value, placeholder, cls, onValue}){
    this.value = value;
    this.placeholder = placeholder;
    this.cls = cls;
    this.onValue = onValue;
  }
}

TextArea.tpl = [FormControl, {
  tagName: 'textarea',
  value: '= value',
  placeholder: '= placeholder',
  cls: '= cls',
  onValue: '= onValue'
}];

export default TextArea;
