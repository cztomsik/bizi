import _ from 'lodash';
import {Base} from './_base';

export class Control extends Base{
  init(){
    super.init();

    this.value = null;
  }

  getValue(){
    return this.value;
  }

  setValue(v){
    this.value = v;
  }

  change(){
    this.fire('value', this.value);
  }

  applyOptions(options){
    super.applyOptions(options);

    // weird but pragmatic
    if (('value' in options) && (this.value !== this.options.value)){
      this.setValue(this.options.value);
    }
  }

  fire(eventName, ...args){
    if (this.options.enabled){
      const listener = this.options[(`on${_.upperFirst(eventName)}`)];

      if (listener){
        return listener(...args);
      }
    }
  }
}

Control.setDefaults({
  enabled: true,
  value: null,
  readOnly: false,

  onValue: null
});
