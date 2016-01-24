import Component from './component';
import Div from './div';
import css from './_css';

class ListGroupItem extends Component{
  init({type, cls, children}){
    // success/info/warning/danger
    this.type = type;
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'list-group-item', this.type);
  }
}

ListGroupItem.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default ListGroupItem;
