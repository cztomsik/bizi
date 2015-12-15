import Component from './component';
import BsDiv from './_bs-div';

class PageHeader extends Component{}

PageHeader.tpl = [BsDiv, {
  base: 'page-header',
  cssClass: '= cssClass',
  children: '= children'
}];

export default PageHeader;