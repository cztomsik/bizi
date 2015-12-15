import Component from './component';
import BsDiv from './_bs-div';

class Container extends Component{}

Container.tpl = [BsDiv, {
  base: 'container-fluid',
  cssClass: '= cssClass',
  children: '= children'
}];

export default Container;