import Component from './component';
import Div from './div';
import css from './_css';

class Row extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'row');
  }
}

Row.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default Row;