import Component from './component';
import Element from './_element';

class NavItem extends Component{
  init({cls, text, onClick}){
    this.cls = cls;
    this.text = text;
    this.onClick = onClick;
  }
}

NavItem.tpl = [Element, {tagName: 'li', className: '= cls'},
  [Element, {tagName: 'a', innerText: '= text', onclick: '= onClick'}]
];

export default NavItem;
