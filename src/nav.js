import Component from './component';
import Div from './div';
import css from './_css';

class Nav extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'nav', type);
    this.children = children;
  }
}

Nav.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Nav;
