import Component from './component';
import Div from './div';
import css from './_css';

class MediaBody extends Component{
  init({cls, children}){
    this.divCls = css.for(cls, 'media-body');
    this.children = children;
  }
}

MediaBody.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default MediaBody;
