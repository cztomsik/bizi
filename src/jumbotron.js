import Component from './component';
import css from './_css';

class Jumbotron extends Component{
  init({className}){
    this.divClassName = css(className, 'jumbotron');
  }
}

Jumbotron._template = `
  <div $class="divClassName">
    <content></content>
  </div>
`;

export default Jumbotron;
