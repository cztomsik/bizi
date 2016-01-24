import Component from './component';
import Element from './_element';
import Link from './link';

class NavItem extends Component{
  init({cls, text, href, onClick}){
    this.cls = cls;
    this.text = text;
    this.href = href;
    this.onClick = onClick;
  }
}

NavItem.tpl = [Element, {tagName: 'li', className: '= cls'},
  [Link, {text: '= text', href: '= href', onClick: '= onClick'}]
];

export default NavItem;
