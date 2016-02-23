import Component from './component';
import Div from './div';
import FormControl from './_form-control';

class TextField extends Component{
  init({value, placeholder, css, onValue}){
    this.value = value;
    this.placeholder = placeholder;
    this.css = css;
    this.onValue = onValue;
  }
}

TextField.tpl = [Div, {css: '= css'},
  [FormControl, {
    tagName: 'input',
    value: '= value',
    placeholder: '= placeholder',
    onValue: '= onValue'
  }]
];

export default TextField;
