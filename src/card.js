import Component from './component';
import Div from './div';
import css from './_css';

class Card extends Component{
  init({type = 'default', cls, children}){
    this.divCls = css.for(cls, 'panel', type);
    this.children = children;
  }
}

Card.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Card;
