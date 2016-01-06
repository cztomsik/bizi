import Component from './component';
import Element from './_element';

class Form extends Component{
  init({children, cls, onChange}){
    this.children = children;
    this.cls = cls;
    this.onChange = onChange;
  }
}

Form.tpl = [Element, {
  tagName: 'form',
  className: '= cls',
  onchange: '= onChange',
  children: '= children'
}];

export default Form;
