import Component from './component';
import Div from './div';
import css from './_css';

class PageHeader extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'page-header');
    this.children = children;
  }
}

PageHeader.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default PageHeader;
