import Component from './component';
import Element from './_element';

class Heading extends Component{
  init({text = ''}){
    this.text = text;
  }
}

Heading.tpl = [Element, {
  tagName: 'h2',
  innerText: '= text'
}];

export default Heading;
