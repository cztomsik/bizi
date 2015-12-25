import $ from 'jquery';
import Component from './component';
import Div from './div';
import ControlLabel from './control-label';

class FormGroup extends Component{
  init({label, cls, children}){
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

  destroy(){
    this._label.destroy();
    this._label = null;
    this.divChildren = null;

    super.destroy();
  }
}

FormGroup.tpl = [Div, {
  cls: 'form-group',
  children: '= divChildren'
}];

export default FormGroup;
