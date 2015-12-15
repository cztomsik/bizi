import Component from './component';
import BsDiv from './_bs-div';

class BtnToolbar extends Component{}

BtnToolbar.tpl = [BsDiv, {
  cssClass: '= cssClass',
  children: '= children'
}];

export default BtnToolbar;