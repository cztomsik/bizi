import Component from './component';
import Element from './_element';
import css from './_css';

class Link extends Component{
  init({text, href, cls}){
    this.text = text;
    this.href = href;
    this.cls = cls;
  }
}

Link.tpl = [Element, {
  tagName: 'a',
  href: '= href',
  innerText: '= text',
  className: '= cls'
}];

export default Link;
