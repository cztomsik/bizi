import Component from './component';
import BsDiv from './_bs-div';

class Col extends Component{}

Col.tpl = [BsDiv, {
  base: 'col',
  // TODO: xs, sm, md, lg, offset, push, pull
  cssClass: '= cssClass',
  children: '= children'
}];

export default Col;