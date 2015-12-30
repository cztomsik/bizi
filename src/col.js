import Component from './component';
import Div from './div';
import css from './_css';

class Col extends Component{
  init({sm = '', cls, children}){
    this.sm = sm;
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'col',
      this.sm && ('sm-' + this.sm)
    );
  }
}

Col.tpl = [Div, {
  // TODO: xs, sm, md, lg, offset, push, pull
  cls: '= divCls',
  children: '= children'
}];

export default Col;