import Component from './component';
import Div from './div';
import Container from './container';
import css from './_css';

class Navbar extends Component{
  init({type = 'default', cssClass, children}){
    this.type = type;
    this.cssClass = cssClass;
    this.children = children;
  }

  get divCssClass(){
    return css.for(this.cssClass, 'navbar', this.type);
  }
}

Navbar.tpl = [Div, {cssClass: '= divCssClass'},
  [Container, {
    children: '= children'
  }]
];

export default Navbar;
