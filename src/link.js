import Component from './component';
import Element from './_element';
import css from './_css';

class Link extends Component{
  init({text, href = '', cls, onClick}){
    this.text = text;
    this.href = href;
    this.cls = cls;
    this.onClick = onClick;
  }

  click(e){
    if (this.onClick){
      this.onClick.call(null, e);
    }

    if ( ! this.href){
      e.preventDefault();
    }
  }
}

Link.tpl = [Element, {
  tagName: 'a',
  href: '= href',
  innerText: '= text',
  className: '= cls',
  onclick: '() click'
}];

export default Link;
