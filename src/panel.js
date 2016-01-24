import Component from './component';
import Div from './div';
import css from './_css';

class Panel extends Component{
  init({type = 'default', cls, children}){
    // default/primary/success/warning/danger/info
    this.type = type;
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'panel', this.type);
  }
}

Panel.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Panel;
