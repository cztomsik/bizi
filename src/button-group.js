import {Base} from './_base';

/**
 * Group related buttons together
 *
 * <example>
 *   <b-button text="Edit" />
 *
 *   <b-button-group>
 *     <b-button text="Postpone" />
 *     <b-button text="Resolve" />
 *   </b-button-group>
 * </example>
 */
export class ButtonGroup extends Base{
  getClassName(){
    return `btn-group ${super.getClassName()}`;
  }
}

ButtonGroup._template = `
  <div
    class="{{ this.getClassName() }}"
    children="{{ this.options.children }}"
  />
`;

ButtonGroup.setDefaults({
  children: []
});
