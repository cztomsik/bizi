import Component from './component';
import Div from './div';
import css from './_css';

class PanelFooter extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'panel-footer');
    this.children = children;
  }
}

PanelFooter.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default PanelFooter;
