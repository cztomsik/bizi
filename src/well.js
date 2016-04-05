import Component from './component';
import css from './_css';

class Well extends Component{
  init({className}){
    this.divClassName = css(className, 'well');
  }
}

Well._template = `
  <div $class="divClassName">
    <content></content>
  </div>
`;

export default Well;
