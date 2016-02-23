import Component from './component';
import Element from './_element';
import Link from './link';
import _css from './_css';

class NavDropdown extends Component{
  init({text, css, children}){
    this.liCss = _css(css, 'dropdown');

    this.text = text;
    this.children = children;
  }

  render(){
    super.render();

    // safe
    this.el.children[0].setAttribute('data-toggle', 'dropdown');

    // not-so-safe
    this.el.children[0].insertAdjacentHTML('beforeend', ' <span class="caret"></span>');
  }
}

NavDropdown.tpl = [Element, {tagName: 'li', className: '= liCss'},
  [Link, {text: '= text'}],
  [Element, {tagName: 'ul', className: 'dropdown-menu', children: '= children'}]
];

export default NavDropdown;
