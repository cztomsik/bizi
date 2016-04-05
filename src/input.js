import Component from './component';

class Input extends Component{
  init({placeholder = '', className, value, onValue}){
    this.inputClassName = `form-control ${className}`;
    this.placeholder = placeholder;
    this.value = value;
    this.onValue = onValue;
  }

  change(e){
    this.onValue(e);
  }
}

Input._template = `
  <input $placeholder="placeholder" $class="inputClassName" $value="value" $onchange="change.bind(context)">
`;

export default Input;
