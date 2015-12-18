import Component from './component';
import Element from './_element';

class Select extends Component{
  init({cssClass, value}){
    this.cssClass = cssClass;
    this.value = value;
  }
}

Select.tpl = [Element, {
  tagName: 'select',
  className: '= cssClass',
  value: '= value'
}];

export default Select;
