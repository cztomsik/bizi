import Component from './component';
import Div from './_bs-div';

class Col extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'col');
  }
}

Col.tpl = [Div, {
  // TODO: xs, sm, md, lg, offset, push, pull
  cssClass: '= divCssClass',
  children: '= children'
}];

export default Col;