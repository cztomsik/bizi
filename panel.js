import Component from './component';
import Div from './div';
import css from './_css';

class Panel extends Component{
  init(opts){
    super.init(Object.assign({type: 'default'}, opts));
  }

  get divCssClass(){
    return css.for(this.cssClass, 'panel', this.type);
  }
}

Panel.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default Panel;
