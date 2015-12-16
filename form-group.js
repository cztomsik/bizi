import $ from 'jquery';
import Component from './component';
import Div from './div';
import ControlLabel from './control-label';

class FormGroup extends Component{
  constructor(opts){
    super(opts);
  }

  init({label, cssClass, children}){
    this.label = label;
    this.cssClass = cssClass;
    this.children = children;

    if ( ! this._label){
      this._label = new ControlLabel({text: this.label});
    }

    this.divChildren = [this._label].concat(this.children);
  }

  destroy(){
    super.destroy();

    this._label.destroy();
    this._label = null;
    this.divChildren = null;
  }
}

FormGroup.tpl = [Div, {
  cssClass: 'form-group',
  children: '= divChildren'
}];

export default FormGroup;
