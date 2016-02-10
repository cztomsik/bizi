import Component from './component';
import Div from './div';
import css from './_css';

class CardHeader extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'panel-header');
    this.children = children;
  }
}

CardHeader.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default CardHeader;
