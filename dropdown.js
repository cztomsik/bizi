import Component from './component';
import Element from './_element';

class Dropdown extends Component{
  init({cssClass}){
    this.cssClass = cssClass;
  }
}

Dropdown.tpl = [Element, {
  tagName: 'li',
  className: '= cssClass'
}];