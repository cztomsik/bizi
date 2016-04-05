import Component from './component';
import css from './_css';

class Alert extends Component{
  init({className}){
    this.divClassName = css(className, 'alert alert-info');
  }
}

Alert._template = `
  <div $class="divClassName">
    <content></content>
  </div>
`;

export default Alert;
