import Component from './component';
import Element from './_element';
import css from './_css';

class Form extends Component{
  init({cls, onSubmit, children}){
    this.formCls = css(cls);
    this.onSubmit = onSubmit || () => {};
    this.children = children;
  }

  onFormSubmit(e){
    try {
      this.onSubmit.call(null);
    } finally {
      e.preventDefault();
    }
  }
}

Form.tpl = [Element, {
  tagName: 'form',
  className: '= formCls',
  onsubmit: '() onFormSubmit',
  children: '= children'
}];

export default Form;
