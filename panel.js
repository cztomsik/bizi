import Component from './component';
import Div from './div';
import css from './_css';

class Panel extends Component{
  init({type = 'default', cssClass, children}){
    this.cssClass = cssClass;
    this.children = children;
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
