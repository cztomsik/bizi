import Component from './component';
import Div from './div';
import css from './_css';

class Col extends Component{
  init({xs, xsOffset, xsPull, xsPush, sm, smOffset, smPull, smPush, md, mdOffset, mdPull, mdPush, lg, lgOffset, lgPull, lgPush, cls, children}){
    // 1-12
    this.xs = xs;
    this.xsOffset = xsOffset;
    this.xsPull = xsPull;
    this.xsPush = xsPush;

    // 1-12
    this.sm = sm;
    this.smOffset = smOffset;
    this.smPull = smPull;
    this.smPush = smPush;

    // 1-12
    this.md = md;
    this.mdOffset = mdOffset;
    this.mdPull = mdPull;
    this.mdPush = mdPush;

    // 1-12
    this.lg = lg;
    this.lgOffset = lgOffset;
    this.lgPull = lgPull;
    this.lgPush = lgPush;


    this.cls = cls;
    this.children = children;
  }

  get divCls(){
    const mapping = {
      'xs': this.xs,
      'xs-offset': this.xsOffset,
      'xs-pull': this.xsPull,
      'xs-push': this.xsPush,
      'sm': this.sm,
      'sm-offset': this.smOffset,
      'sm-pull': this.smPull,
      'sm-push': this.smPush,
      'md': this.md,
      'md-offset': this.mdOffset,
      'md-pull': this.mdPull,
      'md-push': this.mdPush,
      'lg': this.lg,
      'lg-offset': this.lgOffset,
      'lg-pull': this.lgPull,
      'lg-push': this.lgPush
    };

    let parts = [];

    for (let k in mapping){
      if (mapping[k]){
        parts.push(k + '-' + mapping[k]);
      }
    }

    return css.for(this.cls, 'col', ...parts);
  }
}

Col.tpl = [Div, {
  // TODO: xs, sm, md, lg, offset, push, pull
  cls: '= divCls',
  children: '= children'
}];

export default Col;
