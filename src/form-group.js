import Component from './component';
import Div from './div';
import css from './_css';
import ControlLabel from './control-label';

class FormGroup extends Component{
  init({size, cls, children}){
    this.divCls = css.for(cls, 'form-group', size);
    this.children = children;
  }
}

FormGroup.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default FormGroup;
