import Component from './component';
import Element from './_element';
import css from './_css';

class Nav extends Component{
  init({cls, children, type}){
    this.ulCls = css.for(cls, 'nav', type);
    this.children = children;
  }
}

Nav.tpl = [Element, {
  tagName: 'ul',
  className: '= ulCls',
  children: '= children'
}];

export default Nav;
