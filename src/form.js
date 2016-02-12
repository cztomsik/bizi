import Component from './component';
import Element from './_element';
import css from './_css';

class Form extends Component{
  init({layout = 'stacked', cls, onSubmit, children}){
    this.formCls = css(cls, `form-${layout}`);
    this.onSubmit = onSubmit;
    this.children = children;
  }
}

Form.tpl = [Element, {
  tagName: 'form',
  className: '= cls',
  onsubmit: '= onSubmit',
  children: '= children'
}];

export default Form;
