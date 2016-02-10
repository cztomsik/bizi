import Component from './component';
import Div from './div';
import css from './_css';

class Media extends Component{
  init({align = 'top', cls, children}){
    this.divCls = css.for(cls, 'media', align);
    this.children = children;
  }
}

Media.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Media;
