import Component from './component';
import Div from './div';
import css from './_css';

class PanelBody extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'panel-body');
    this.children = children;
  }
}

PanelBody.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default PanelBody;
