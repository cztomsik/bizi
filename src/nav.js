import Component from './component';
import Element from './_element';
import _css from './_css';

class Nav extends Component{
  init({type, css, children}){
    this.ulCss = _css(css, 'nav', `nav-${type}`);
    this.children = children;
  }
}

Nav.tpl = [Element, {
  tagName: 'ul',
  className: '= ulCss',
  children: '= children'
}];

export default Nav;
