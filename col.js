import Component from './component';
import Div from './div';
import css from './_css';

class Col extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'col',
      this.sm && ('sm-' + this.sm)
    );
  }
}

Col.tpl = [Div, {
  // TODO: xs, sm, md, lg, offset, push, pull
  cssClass: '= divCssClass',
  children: '= children'
}];

export default Col;