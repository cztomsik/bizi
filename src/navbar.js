import Element from './_element';
import Component from './component';
import Div from './div';
import Container from './container';
import css from './_css';

class Navbar extends Component{
  init({type = 'default', href = '', cls, children}){
    this.divCls = css.for(cls, 'navbar', type);
    this.href = href;
    this.children = children;
  }
}

Navbar.tpl = [Div, {cls: '= divCls'},
  [Container, {
    children: '= children'
  }]
];

export default Navbar;
