import Component from './component';
import Div from './div';
import css from './_css';

class Alert extends Component{
  init(opts){
    super.init(Object.assign({type: 'info'}, opts));
  }

  get divCssClass(){
    return css.for(this.cssClass, 'alert', this.type);
  }
}

Alert.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default Alert;
