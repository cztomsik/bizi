import Component from './component';
import Element from './_element';

class Image extends Component{
  init({src, cssClass}){
    this.src = src;
    this.cssClass = cssClass;
  }
}

Image.tpl = [Element, {
  tagName: 'img',
  src: '= src',
  className: '= cssClass'
}];

export default Image;
