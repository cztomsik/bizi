import Component from './component';
import Div from './div';
import css from './_css';

class PageHeader extends Component{
  init({cls, children}){
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'page-header');
  }
}

PageHeader.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default PageHeader;