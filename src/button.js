import Component from './component';
import Element from './_element';
import _css from './_css';

class Button extends Component{
  init({text, css, toggle, onClick}){
    this.text = text;
    this.buttonCss = _css(css, 'btn', 'btn-default');
    this.toggle = toggle;
    this.onClick = onClick;
  }

  render(){
    super.render();

    if (this.toggle){
      this.el.setAttribute('data-toggle', this.toggle);
    }
  }
}

Button.tpl = [Element, {
  tagName: 'button',
  type: 'button',
  innerText: '= text',
  className: '= buttonCss',
  onclick: '= onClick'
}];

export default Button;
