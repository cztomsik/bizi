import Component from './component';
import css from './_css';

class FormGroup extends Component{
  init({className}){
    this.divClassName = css(className, 'form-group');
  }
}

FormGroup._template = `
  <div $class="divClassName">
    <content></content>
  </div>
`;

export default FormGroup;
