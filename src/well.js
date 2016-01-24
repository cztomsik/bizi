import Component from './component';
import Div from './div';
import css from './_css';

class Well extends Component{
  init({size, cls, children}){
    // sm/lg
    this.size = size;
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'well', this.size);
  }
}

Well.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Well;
