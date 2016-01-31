import Component from './component';
import Div from './div';
import css from './_css';

class NavbarNav extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'nav navbar-nav');
    this.children = children;
  }
}

NavbarNav.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default NavbarNav;
