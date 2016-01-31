import Component from './component';
import Div from './div';
import css from './_css';

class Well extends Component{
  init({size, cls, children}){
    this.divCls = css.for(cls, 'well', size);
    this.children = children;
  }
}

Well.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Well;
