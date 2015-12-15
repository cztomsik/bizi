import Component from './component';
import Div from './div';
import css from './_css';

class Nav extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'nav', this.type);
  }
}

Nav.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default Nav;
