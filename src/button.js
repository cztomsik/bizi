import Component from './component';
import css from './_css';

class Button extends Component{
  init({text, className}){
    this.text = text;
    this.buttonClassName = css(className, 'btn btn-default');
  }
}

Button._template = `
  <button type="button" $class="buttonClassName" $inner-text="text"></button>
`;

export default Button;
