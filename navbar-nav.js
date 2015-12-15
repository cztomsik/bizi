import Component from './component';
import BsDiv from './_bs-div';

class NavbarNav extends Component{}

NavbarNav.tpl = [BsDiv, {
  base: 'navbar-nav',
  cssClass: '= cssClass',
  children: '= children'
}];

export default NavbarNav;
