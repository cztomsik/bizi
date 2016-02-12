import Component from './component';
import Element from './_element';
import css from './_css';

class Nav extends Component{
  init({type, cls, children}){
    this.ulCls = css(cls, 'nav', `nav-${type}`);
    this.children = children;
  }
}

Nav.tpl = [Element, {
  tagName: 'ul',
  className: '= ulCls',
  children: '= children'
}];

export default Nav;
