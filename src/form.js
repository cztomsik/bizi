import Component from './component';
import Element from './_element';

class Form extends Component{
  init({children, cls}){
    this.children = children;
    this.cls = cls;
  }
}

Form.tpl = [Element, {
  tagName: 'form',
  className: '= cls',
  children: '= children'
}];

export default Form;
