import Component from './component';
import Div from './div';
import FormControl from './_form-control';

class TextField extends Component{
  init({value, placeholder, cls, onValue}){
    this.value = value;
    this.placeholder = placeholder;
    this.cls = cls;
    this.onValue = onValue;
  }
}

TextField.tpl = [Div, {cls: '= cls'},
  [FormControl, {
    tagName: 'input',
    value: '= value',
    placeholder: '= placeholder',
    onValue: '= onValue'
  }]
];

export default TextField;
