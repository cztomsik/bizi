import Component from './component';
import BsDiv from './_bs-div';

class Nav extends Component{}

Nav.tpl = [BsDiv, {
  cssClass: '= cssClass',
  children: '= children'
}];

export default Nav;
