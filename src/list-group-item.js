import Component from './component';
import Div from './div';
import css from './_css';

class ListGroupItem extends Component{
  init({type, cls, children}){
    this.divCls = css.for(cls, 'list-group-item', type);
    this.children = children;
  }
}

ListGroupItem.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default ListGroupItem;
