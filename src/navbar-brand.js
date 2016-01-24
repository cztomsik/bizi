import Component from './component';
import Link from './link';
import css from './_css';

class NavbarBrand extends Component{
  init({text, href, cls, onClick}){
    this.text = text;
    this.href = href;
    this.cls = cls;
    this.onClick = onClick;
  }

  get linkCls(){
    return css.for(this.cls, 'navbar-brand');
  }
}

NavbarBrand.tpl = [Link, {
  href: '= href',
  text: '= text',
  cls: '= linkCls',
  onclick: '= onClick'
}];

export default NavbarBrand;
