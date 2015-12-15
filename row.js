import Component from './component';
import BsDiv from './_bs-div';

class Row extends Component{}

Row.tpl = [BsDiv, {
  base: 'row',
  cssClass: '= cssClass',
  children: '= children'
}];

export default Row;