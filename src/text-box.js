import {Control} from './_control';

/**
 * <example>
 *   <b-text-box ng-model=" $ctrl.text " />
 *   {{ $ctrl.text }}
 * </example>
 */
export class TextBox extends Control{
  render(){
    super.render();

    this.getElement().value = this.value || '';
  }

  getClassName(){
    return `form-control ${super.getClassName()}`;
  }

  handleDomInput(e){
    this.value = e.target.value;
    this.change();
  }
}

TextBox._template = `
  <input
    class="{{ this.getClassName() }}"
    disabled="{{ ! this.options.enabled }}"
    type="{{ this.options.type }}"
    placeholder="{{ this.options.placeholder }}"
    on-input="handleDomInput"
  />
`;

TextBox.setDefaults({
  value: '',
  type: 'text',
  onValue: null,
  placeholder: ''
});
