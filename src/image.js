import Component from './component';
import Element from './_element';
import css from './_css';

class Image extends Component{
  init({src, cls}){
    this.src = src;
    this.imgCls = css.for(cls, 'img-responsive');
  }
}

Image.tpl = [Element, {
  tagName: 'img',
  src: '= src',
  className: '= imgCls'
}];

export default Image;
