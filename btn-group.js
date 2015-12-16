import Component from './component';
import Div from './div';
import css from './_css';

class BtnGroup extends Component{
  init({cssClass, children}){
    this.cssClass = cssClass;
    this.children = children;
  }

  get divCssClass(){
    return css.for(this.cssClass, 'btn-group');
  }
}

BtnGroup.tpl = [Div, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default BtnGroup;