import Component from './component';
import Element from './_element';
import View from './view';

// DataView?
class Repeater extends Component{
  // TODO: detect changes, consider merging?
  init({tagName, className, items, tpl}){
    this.tagName = tagName;
    this.className = className;
    this.items = items;
    this.tpl = tpl;

    this.views = this.items.map(item => new View({model: {item}, tpl}));
    this.children = this.views.map(item => item.el);
  }

  reset(opts){
    this.destroyChildren();
    super.reset(opts);
  }

  destroyChildren(){
    this.views.forEach(v => v.destroy());
  }

  destroy(){
    this.destroyChildren();
    super.destroy();
  }
}

Repeater.tpl = [Element, {
  tagName: '= tagName',
  className: '= className',
  children: '= children'
}];

export default Repeater;
