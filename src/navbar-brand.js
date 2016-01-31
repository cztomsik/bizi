import Component from './component';
import Link from './link';
import css from './_css';

class NavbarBrand extends Component{
  init({text, href, cls, onClick}){
    this.linkCls = css.for(cls, 'navbar-brand');
    this.text = text;
    this.href = href;
    this.onClick = onClick;
  }
}

NavbarBrand.tpl = [Link, {
  href: '= href',
  text: '= text',
  cls: '= linkCls',
  onclick: '= onClick'
}];

export default NavbarBrand;
