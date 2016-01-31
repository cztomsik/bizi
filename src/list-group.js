import Component from './component';
import Div from './div';
import css from './_css';

class ListGroup extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'list-group');
    this.children = children;
  }
}

ListGroup.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default ListGroup;
