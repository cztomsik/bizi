import Component from './component';
import css from './_css';

class Container extends Component{
  init({className}){
    this.divClassName = css(className, 'container-fluid');
  }
}

Container._template = `
  <div $class="divClassName">
    <content></content>
  </div>
`;

export default Container;
