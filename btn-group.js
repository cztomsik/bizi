import Component from './component';
import BsDiv from './_bs-div';
import css from './_css';

class BtnGroup extends Component{
  get divCssClass(){
    return css.for(this.cssClass, 'btn-group');
  }
}

BtnGroup.tpl = [BsDiv, {
  cssClass: '= divCssClass',
  children: '= children'
}];

export default BtnGroup;