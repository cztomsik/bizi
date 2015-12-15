import Component from './component';
import BsDiv from './_bs-div';

class Well extends Component{}

Well.tpl = [BsDiv, {
  cssClass: '= cssClass',
  children: '= children'
}];

export default Well;