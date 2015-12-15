import Component from './component';
import BsDiv from './_bs-div';

class Panel extends Component{
  init(opts){
    super.init(Object.assign({variant: 'default'}, opts));
  }
}

Panel.tpl = [BsDiv, {
  base: 'panel',
  variant: '= variant',
  cssClass: '= cssClass',
  children: '= children'
}];

export default Panel;