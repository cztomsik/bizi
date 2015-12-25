import Component from './component';
import Element from './_element';

class Select extends Component{
  init({cls, value}){
    this.cls = cls;
    this.value = value;
  }
}

Select.tpl = [Element, {
  tagName: 'select',
  className: '= cls',
  value: '= value'
}];

export default Select;
