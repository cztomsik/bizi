import Component from './component';
import Div from './div';

class Page extends Component{
  init({cls, children}){
    this.cls = cls;
    this.children = children;
  }
}

Page.tpl = [Div, {
  cls: '= cls',
  children: '= children'
}];

export default Page;