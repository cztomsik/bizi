import Component from './component';
import css from './_css';

class Page extends Component{
  init({className}){
    this.divClassName = css(className, 'page');
  }
}

Page._template = `
  <div $class="divClassName">
    <content></content>
  </div>
`;

export default Page;
