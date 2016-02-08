import Component from './component';
import Div from './div';
import css from './_css';

class ButtonToolbar extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'btn-toolbar');
    this.children = children;
  }
}

ButtonToolbar.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default ButtonToolbar;
