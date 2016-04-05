import Component from './component';
import css from './_css';

class Nav extends Component{
  init({className}){
    this.ulClassName = css(className, 'nav');
  }
}

Nav._template = `
  <ul $class="ulClassName">
    <content></content>
  </ul>
`;

export default Nav;
