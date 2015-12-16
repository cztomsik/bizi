import $ from 'jquery';
import Component from './component';
import Element from './_element';

class Heading extends Component{
  init({text, smallText, br = true}){
    this.text = text;
    this.smallText = smallText;
    this.br = br;
  }

  // doesn't happen that much
  update(){
    super.update();

    const $el = $(this.el);

    if (this.smallText){
      if (this.br){
        $el.append('<br>');
      }

      $el.append($('<small>').text(this.smallText));
    }
  }
}

Heading.tpl = [Element, {
  tagName: 'h2',
  innerText: '= text'
}];

export default Heading;
