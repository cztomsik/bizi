import Element from './_element';
import Component from './component';
import Div from './div';
import Container from './container';
import css from './_css';

class Navbar extends Component{
  init({type = 'default', href = '', cls, children}){
    // default/inverse
    this.type = type;
    this.href = href;
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'navbar', this.type);
  }
}

Navbar.tpl = [Div, {cls: '= divCls'},
  [Container, {
    children: '= children'
  }]
];

export default Navbar;
