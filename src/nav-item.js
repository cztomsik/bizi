import Component from './component';
import Element from './_element';
import Link from './link';
import css from './_css';

class NavItem extends Component{
  init({text, href, toggle, toggleTarget, cls, onClick}){
    this.text = text;
    this.href = href;
    this.toggle = toggle;
    this.toggleTarget = toggleTarget;
    this.liCls = css(cls);
    this.onClick = onClick;
  }
}

NavItem.tpl = [Element, {tagName: 'li', className: '= liCls'},
  [Link, {
    text: '= text',
    href: '= href',
    toggle: '= toggle',
    toggleTarget: '= toggleTarget',
    onClick: '= onClick'
  }]
];

export default NavItem;
