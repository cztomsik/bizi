import Component from './component';
import css from './_css';

class ButtonGroup extends Component{
  init({className}){
    this.divClassName = css(className, 'btn-group');
  }
}

ButtonGroup._template = `
  <div $class="divClassName">
    <content></content>
  </div>
`;

export default ButtonGroup;
