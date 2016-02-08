import Component from './component';
import Nav from './nav';
import css from './_css';

class NavbarNav extends Component{
  init({cls, children}){
    this.navCls = css.for(cls, 'navbar-nav');
    this.children = children;
  }
}

NavbarNav.tpl = [Nav, {
  cls: '= navCls',
  children: '= children'
}];

export default NavbarNav;
