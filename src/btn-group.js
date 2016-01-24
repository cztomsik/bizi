import Component from './component';
import Div from './div';
import css from './_css';

class BtnGroup extends Component{
  init({size, cls, children}){
    // xs/sm/lg
    this.size = size;
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'btn-group', this.size);
  }
}

BtnGroup.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default BtnGroup;
