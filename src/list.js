import _ from 'lodash';
import {DataControl} from './_data-control';
import {Control} from './_control';

// LATER: tabindex=1 (should be -1 if not selected)

/**
 * Tabs
 * <example>
 *   <b-list class="nav nav-tabs" items=" [{name: 'Foo'}, {name: 'Bar'}] " />
 * </example>
 *
 * Pills
 * <example>
 *   <b-list class="nav nav-pills" items=" [{name: 'Foo'}, {name: 'Bar'}] " />
 * </example>
 *
 * <example>
 *   <b-list
 *     class="nav"
 *     items=" $ctrl.items "
 *     ng-model=" $ctrl.selection "
 *   />
 *   Selected: {{ $ctrl.selection }}
 * </example>
 */
export class List extends DataControl{
  createItemView(item){
    return new ListItem({
      text: item.name,
      active: item === this.value,
      onClick: () => {
        this.select(item);
      }
    });
  }

  renderItemView(listItem, item){
    listItem.applyOptions({
      text: item.name,
      active: item === this.value
    });
  }
}

List._template = `
  <ul
    class="{{ this.getClassName() }}"
    role="{{ this.options.role }}"
    children="{{ this.getItemElements() }}"
  ></ul>
`;

List.setDefaults({
  items: [],
  role: 'listbox'
});

class ListItem extends Control{
  getClassName(){
    return `${this.options.active && 'active'} ${super.getClassName()}`;
  }

  click(){
    this.fire('click');
  }
}

ListItem._template = `
  <li class="{{ this.getClassName() }}" role="{{ this.options.role }}" on-click="click">
    <a>
      <b-text value="{{ this.options.text }}" />
    </a>
  </li>
`;

ListItem.setDefaults({
  text: '',
  active: false,
  // cursor: pointer
  role: 'button',

  onClick: null
});
