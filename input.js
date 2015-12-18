import Component from './component';
import Element from './_element';

class Input extends Component{
  init({type = 'text', className, value, onChange}){
    this.type = type;
    this.className = className;
    this.value = value;
    this.onChange = onChange;
  }
}

Input.tpl = [Element, {
  tagName: 'input',
  type: '= type',
  className: '= className',
  value: '= value',
  onchange: '= onChange'
}];

export default Input;
