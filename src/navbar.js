import Element from './_element';
import Component from './component';
import Div from './div';
import Container from './container';
import css from './_css';

class Navbar extends Component{
  init({type = 'default', text = '', href = '', cls, children}){
    // default/inverse
    this.type = type;
    this.text = text;
    this.href = href;
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'navbar', this.type);
  }
}

Navbar.tpl = [Div, {cls: '= divCls'},
  [Element, {
    tagName: 'a',
    className: 'navbar-brand',
    href: '= href',
    innerText: '= text'
  }],

  [Container, {
    children: '= children'
  }]
];

export default Navbar;
