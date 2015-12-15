import Component from './component';
import Div from './div';
import css from './_css';

class Well extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'well', this.size);
  }
}

Well.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default Well;
