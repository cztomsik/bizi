import {Base} from './_base';

/**
 * <example>
 *   <b-label text="Label" />
 * </example>
 */
export class Label extends Base{

}

Label._template = `
  <label class="{{ this.getClassName() }}">
    <b-text value="{{ this.options.text }}" />
  </label>
`;

Label.setDefaults({
  text: ''
});
