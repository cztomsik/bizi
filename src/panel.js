import Component from './component';
import Div from './div';
import css from './_css';

class Panel extends Component{
  init({type = 'default', cls, children}){
    this.divCls = css.for(cls, 'panel', type);
    this.children = children;
  }
}

Panel.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Panel;
