import Component from './component';
import Div from './div';

class BtnToolbar extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'btn-toolbar');
  }
}

BtnToolbar.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default BtnToolbar;