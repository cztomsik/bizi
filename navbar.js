import Component from './component';
import BsDiv from './_bs-div';
import Container from './container';

class Navbar extends Component{
  init(opts){
    super.init(Object.assign({variant: 'default'}, opts));
  }
}

Navbar.tpl = [BsDiv, {base: 'navbar', variant: '= variant', cssClass: '= cssClass'},
  [Container, {
    children: '= children'
  }]
];

export default Navbar;
