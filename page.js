import Component from './component';
import Div from './div';

class Page extends Component{}

Page.tpl = [Div, {
  cssClass: '= cssClass',
  children: '= children'
}];

export default Page;