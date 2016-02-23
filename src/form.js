import Component from './component';
import Element from './_element';
import _css from './_css';

class Form extends Component{
  init({css, onSubmit, children}){
    this.formCss = _css(css);
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
  className: '= formCss',
  onsubmit: '() onFormSubmit',
  children: '= children'
}];

export default Form;
