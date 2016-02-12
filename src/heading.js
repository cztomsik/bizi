import Component from './component';
import Element from './_element';
import css from './_css';

class Heading extends Component{
  init({text, cls}){
    this.text = text;
    this.headingCls = css(cls, 'm-a-0');
  }
}

Heading.tpl = [Element, {
  tagName: 'h3',
  className: '= headingCls',
  innerText: '= text'
}];

export default Heading;
