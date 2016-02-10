import Component from './component';
import Div from './div';
import css from './_css';

class CardBody extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'panel-body');
    this.children = children;
  }
}

CardBody.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default CardBody;
