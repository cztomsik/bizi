import Component from './component';
import Element from './_element';

class Pre extends Component{
  init({cls, innerHTML}){
    this.cls = cls;
    this.innerHTML = innerHTML;
  }
}

Pre.tpl = [Element, {
  tagName: 'pre',
  className: '= cls',
  innerHTML: '= innerHTML'
}];

export default Pre;
