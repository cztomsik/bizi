import Component from './component';
import FormControl from './_form-control';

class TextField extends Component{
  init({value, placeholder, cls, onValue}){
    this.value = value;
    this.placeholder = placeholder;
    this.cls = cls;
    this.onValue = onValue;
  }
}

TextField.tpl = [FormControl, {
  tagName: 'input',
  value: '= value',
  placeholder: '= placeholder',
  cls: '= cls',
  onValue: '= onValue'
}];

export default TextField;
