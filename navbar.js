import Component from './component';
import Div from './div';
import Container from './container';
import css from './_css';

class Navbar extends Component{
  init(opts){
    super.init(Object.assign({type: 'default'}, opts));
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
