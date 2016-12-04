import _ from 'lodash';
import {Control} from './_control';

/**
 * <example>
 *   <b-button text="Click me" on-click=" $ctrl.notify('Hello') " />
 * </example>
 *
 * <example>
 *   <b-button text="disabled" enabled=" false " />
 *   <b-button text="default" color="default" />
 *   <b-button text="primary" color="primary" />
 *   <b-button text="success" color="success" />
 *   <b-button text="danger" color="danger" />
 * </example>
 */
export class Button extends Control{
  getClassName(){
    return `btn btn-${this.options.color} ${this.value && 'active'} ${super.getClassName()}`;
  }

  click(){
    this.fire('click');
  }
}

Button._template = `
  <button
    class="{{ this.getClassName() }}"
    disabled="{{ ! this.options.enabled }}"
    on-click="click"
  >
    <b-text value="{{ this.options.text }}" />
  </button>
`;

Button.setDefaults({
  color: 'default',
  text: '',
  onClick: null
});
