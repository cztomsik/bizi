import Component from './component';
import Element from './_element';
import _css from './_css';

class FormControl extends Component{
  init({tagName, value, placeholder, css, onValue}){
    this.controlCss = _css(css, 'form-control');

    this.tagName = tagName;
    this.value = value || '';
    this.placeholder = placeholder;
    this.onValue = onValue || () => {};
  }

  controlChange(e){
    this.onValue(e.target.value);
  }
}

FormControl.tpl = [Element, {
  tagName: '= tagName',
  className: '= controlCss',
  placeholder: '= placeholder',
  value: '= value',
  onchange: '() controlChange'
}];

export default FormControl;
