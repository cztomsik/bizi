import Component from './component';
import Element from './_element';
import _css from './_css';

class Heading extends Component{
  init({text, css}){
    this.text = text;
    this.headingCss = _css(css, 'm-a-0');
  }
}

Heading.tpl = [Element, {
  tagName: 'h3',
  className: '= headingCss',
  innerText: '= text'
}];

export default Heading;
