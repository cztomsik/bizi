import Component from './component';
import BsDiv from './_bs-div';

class BtnToolbar extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'btn-toolbar');
  }
}

BtnToolbar.tpl = [BsDiv, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default BtnToolbar;