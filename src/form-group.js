import {Base} from './_base';

export class FormGroup extends Base{
  getClassName(){
    return `form-group ${super.getClassName()}`;
  }
}

FormGroup._template = `
  <div
    class="{{ this.getClassName() }}"
    children="{{ this.options.children }}"
  />
`;

FormGroup.setDefaults({
  children: []
});
