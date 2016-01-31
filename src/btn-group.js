import Component from './component';
import Div from './div';
import css from './_css';

class BtnGroup extends Component{
  init({size, cls, children}){
    this.divCls = css.for(cls, 'btn-group', size);
    this.children = children;
  }
}

BtnGroup.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default BtnGroup;
