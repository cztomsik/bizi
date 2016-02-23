import Component from './component';
import Element from './_element';
import Link from './link';
import _css from './_css';

class NavItem extends Component{
  init({text, href, toggle, toggleTarget, css, onClick}){
    this.text = text;
    this.href = href;
    this.toggle = toggle;
    this.toggleTarget = toggleTarget;
    this.liCss = _css(css);
    this.onClick = onClick;
  }
}

NavItem.tpl = [Element, {tagName: 'li', className: '= liCss'},
  [Link, {
    text: '= text',
    href: '= href',
    toggle: '= toggle',
    toggleTarget: '= toggleTarget',
    onClick: '= onClick'
  }]
];

export default NavItem;
