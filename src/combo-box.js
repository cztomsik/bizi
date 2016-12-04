import {Control} from './_control';

/**
 * <example>
 *   <b-combo-box
 *     items=" $ctrl.items "
 *     ng-model=" $ctrl.selection "
 *   />
 * </example>
 */
export class ComboBox extends Control{
  init(){
    super.init();

    this.open = false;
  }

  getClassName(){
    return `dropdown ${this.open && 'open'} ${super.getClassName()}`;
  }

  select(v){
    this.value = v;
    this.open = false;
    this.render();
    this.change();
  }

  toggle(){
    this.open = ! this.open;
    this.render();
  }
}

ComboBox._template = `
  <div class="{{ this.getClassName() }}">
    <div class="input-group">
      <b-text-box value="{{ this.value && this.value.name }}" />
      <span class="input-group-btn">
        <b-button text="∨" on-click="toggle" />
      </span>
    </div>

    <b-list class="dropdown-menu" items="{{ this.options.items }}" visible="{{ this.open }}" value="{{ this.value }}" on-value="select" />
  </div>
`;

ComboBox.setDefaults({
  items: []
});
