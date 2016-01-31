import Component from './component';
import Div from './div';
import css from './_css';

class Row extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'row');
    this.children = children;
  }
}

Row.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Row;
