import Component from './component';
import Div from './div';
import css from './_css';

class Container extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'container-fluid');
    this.children = children;
  }
}

Container.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Container;
