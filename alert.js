import Component from './component';
import BsDiv from './_bs-div';

class Alert extends Component{}

Alert.tpl = [BsDiv, {
  cssClass: '= cssClass',
  children: '= children'
}];

export default Alert;