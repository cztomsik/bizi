import Component from './component';
import Div from './div';
import css from './_css';

class Progress extends Component{
  init({value, type, cls}){
    this.progressCls = css.for(cls, 'progress');
    this.barCls = css.for('', 'progress-bar', type);
    this.value = value;
  }

  render(){
    super.render();

    // safe
    this.el.children[0].style.width = this.value + '%';
  }
}

Progress.tpl = [Div, {cls: '= progressCls'},
  [Div, {cls: '= barCls'}]
];

export default Progress;
