import Component from './component';
import Element from './_element';
import _css from './_css';

class Image extends Component{
  init({src, css}){
    this.src = src;
    this.imgCss = _css(css);
  }
}

Image.tpl = [Element, {
  tagName: 'img',
  src: '= src',
  className: '= imgCss'
}];

export default Image;
