import Component from './component';
import Div from './div';
import css from './_css';

class NavbarNav extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'navbar-nav');
  }
}

NavbarNav.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default NavbarNav;
