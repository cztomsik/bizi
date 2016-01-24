import Component from './component';
import Div from './div';
import css from './_css';

class Alert extends Component{
  init({type = 'info', cls, children}){
    // success/info/warning/danger
    this.type = type;
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'alert', this.type);
  }
}

Alert.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Alert;
