import Component from './component';
import Element from './_element';
import css from './_css';

class Link extends Component{
  init({text, href = '', toggle, toggleTarget, cls, onClick}){
    this.text = text;
    this.href = href;
    this.toggle = toggle;
    this.toggleTarget = toggleTarget;
    this.cls = css(cls);
    this.onClick = onClick;
  }

  render(){
    super.render();

    if (this.toggle){
      this.el.setAttribute('data-toggle', this.toggle);
    }

    if (this.toggleTarget){
      this.el.setAttribute('data-target', this.toggleTarget);
    }
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
