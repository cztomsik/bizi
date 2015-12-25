import Component from './component';
import Element from './_element';

class Dropdown extends Component{
  init({cls}){
    this.cls = cls;
  }
}

Dropdown.tpl = [Element, {
  tagName: 'li',
  className: '= cls'
}];