import $ from 'jquery';
import Component from './component';
import Div from './div';
import ControlLabel from './control-label';

class FormGroup extends Component{
  constructor(opts){
    super(opts);
  }

  init(opts){
    super.init(opts);

    // TODO: init should not blindly assign everything (it might cause collisions)
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
