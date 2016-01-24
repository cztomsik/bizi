import Component from './component';
import Div from './div';
import css from './_css';
import ControlLabel from './control-label';

class FormGroup extends Component{
  init({size, cls, children}){
    // sm/lg
    this.size = size;

    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'form-group', this.size);
  }
}

FormGroup.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default FormGroup;
