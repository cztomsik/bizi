import Component from './component';
import Div from './div';
import css from './_css';

class Alert extends Component{
  init({type = 'info', cls, children}){
    this.divCls = css.for(cls, 'alert', type);
    this.children = children;
  }
}

Alert.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Alert;
