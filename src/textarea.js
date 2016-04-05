import Component from './component';

class Textarea extends Component{
  init({placeholder = '', className, value, onValue}){
    this.textareaClassName = `form-control ${className}`;
    this.placeholder = placeholder;
    this.value = value;
    this.onValue = onValue;
  }

  change(e){
    this.onValue(e);
  }
}

Textarea._template = `
  <textarea $placeholder="placeholder" $class="textareaClassName" $value="value" $onchange="change.bind(context)"></textarea>
`;

export default Textarea;
