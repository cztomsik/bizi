import Component from './component';
import FormControl from './_form-control';

class Textarea extends Component{
  init({cls, value, onValue}){
    this.cls = cls;
    this.value = value;
    this.onValue = onValue;
  }
}

Textarea.tpl = [FormControl, {
  tagName: 'textarea',
  cls: '= cls',
  value: '= value',
  onValue: '= onValue'
}];

export default Textarea;
