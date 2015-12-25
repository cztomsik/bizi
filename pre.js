import Component from './component';
import Element from './_element';

class Pre extends Component{
  init({cssClass, innerHTML}){
    this.cssClass = cssClass;
    this.innerHTML = innerHTML;
  }
}

Pre.tpl = [Element, {
  tagName: 'pre',
  className: '= cssClass',
  innerHTML: '= innerHTML'
}];

export default Pre;
