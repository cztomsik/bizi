import Component from './component';
import Div from './div';
import css from './_css';

class PanelFooter extends Component{
  init({cls, children}){
    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    return css.for(this.cls, 'panel-footer');
  }
}

PanelFooter.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default PanelFooter;
