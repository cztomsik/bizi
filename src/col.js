import Component from './component';
import Div from './div';
import css from './_css';

class Col extends Component{
  init({xs, xsOffset, xsPull, xsPush, sm, smOffset, smPull, smPush, md, mdOffset, mdPull, mdPush, lg, lgOffset, lgPull, lgPush, cls, children}){
    const mapping = {
      'xs': xs,
      'xs-offset': xsOffset,
      'xs-pull': xsPull,
      'xs-push': xsPush,
      'sm': sm,
      'sm-offset': smOffset,
      'sm-pull': smPull,
      'sm-push': smPush,
      'md': md,
      'md-offset': mdOffset,
      'md-pull': mdPull,
      'md-push': mdPush,
      'lg': lg,
      'lg-offset': lgOffset,
      'lg-pull': lgPull,
      'lg-push': lgPush
    };

    let parts = [];

    for (let k in mapping){
      if (mapping[k]){
        parts.push(k + '-' + mapping[k]);
      }
    }

    this.divCls = css.for(this.cls, 'col', ...parts);
    this.children = children;
  }
}

Col.tpl = [Div, {
  cls: '= divCls',
  children: '= children'
}];

export default Col;
