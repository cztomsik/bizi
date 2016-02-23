import Component from './component';
import FormControl from './_form-control';

class TextArea extends Component{
  init({value, placeholder, css, onValue}){
    this.value = value;
    this.placeholder = placeholder;
    this.css = css;
    this.onValue = onValue;
  }
}

TextArea.tpl = [FormControl, {
  tagName: 'textarea',
  value: '= value',
  placeholder: '= placeholder',
  css: '= css',
  onValue: '= onValue'
}];

export default TextArea;
