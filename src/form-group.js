import Component from './component';
import Div from './div';
import css from './_css';
import ControlLabel from './control-label';

class FormGroup extends Component{
  init({size, label, cls, children}){
    // sm/lg
    this.size = size;
    this.label = label;
    this.cls = cls;
    this.children = children;

    // how about making instantiate public? so we can get instance of (bound) component
    // which will be automatically destroyed?
    // - it doesnt have to be instance method though (Component.getManagedInstance())
    if ( ! this._label){
      this._label = new ControlLabel({text: this.label});
    }

    this.divChildren = [this._label].concat(this.children);
  }

  get divCls(){
    return css.for(this.cls, 'form-group', this.size);
  }

  destroy(){
    this._label.destroy();
    this._label = null;
    this.divChildren = null;

    super.destroy();
  }
}

FormGroup.tpl = [Div, {
  cls: '= divCls',
  children: '= divChildren'
}];

export default FormGroup;
