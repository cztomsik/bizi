import Component from './component';
import BsDiv from './_bs-div';

class BtnGroup extends Component{}

BtnGroup.tpl = [BsDiv, {
  cssClass: '= cssClass',
  children: '= children'
}];

export default BtnGroup;