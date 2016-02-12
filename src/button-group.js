import Component from './component';
import Div from './div';
import css from './_css';

class ButtonGroup extends Component{
  init({size = 'md', cls, children}){
    this.divCls = css(cls, 'btn-group', `btn-group-${size}`);
    this.children = children;
  }
}

ButtonGroup.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default ButtonGroup;
