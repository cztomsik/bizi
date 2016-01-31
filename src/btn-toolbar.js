import Component from './component';
import Div from './div';
import css from './_css';

class BtnToolbar extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'btn-toolbar');
    this.children = children;
  }
}

BtnToolbar.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default BtnToolbar;
