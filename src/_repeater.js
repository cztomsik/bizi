import Component from './component';
import Element from './_element';

// DataView?
class Repeater extends Component{
  // TODO: destroy, detect changes, consider merging?
  init({tagName, className, items, xyz}){
    this.tagName = tagName;
    this.className = className;
    this.items = items;
    this.xyz = xyz;

    this.children = this.items.map(it => this.xyz(it));
  }
}

Repeater.tpl = [Element, {
  tagName: '= tagName',
  className: '= className',
  children: '= children'
}];

export default Repeater;
