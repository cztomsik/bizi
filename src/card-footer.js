import Component from './component';
import Div from './div';
import css from './_css';

class CardFooter extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'panel-footer');
    this.children = children;
  }
}

CardFooter.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default CardFooter;
