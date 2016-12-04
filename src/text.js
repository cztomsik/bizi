import {Base} from './_base';

/**
 * Bare text output.
 *
 * <example>
 *   <b-text value=" 'Hello\nWorld' " />
 * </example>
 */
export class Text extends Base{
  render(){
    super.render();

    this.getElement().innerText = this.options.value || '';
  }
}

Text._template = `
  <span class="{{ this.getClassName() }}"></span>
`;

Text.setDefaults({
  value: null
});
