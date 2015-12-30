import Component from './component';
import Element from './_element';

class Image extends Component{
  init({src, cls}){
    this.src = src;
    this.cls = cls;
  }
}

Image.tpl = [Element, {
  tagName: 'img',
  src: '= src',
  className: '= cls'
}];

export default Image;
