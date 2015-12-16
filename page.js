import Component from './component';
import Div from './div';

class Page extends Component{
  init({cssClass, children}){
    this.cssClass = cssClass;
    this.children = children;
  }
}

Page.tpl = [Div, {
  cssClass: '= cssClass',
  children: '= children'
}];

export default Page;