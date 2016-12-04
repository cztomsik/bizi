import _ from 'lodash';

import {Control} from './_control';
import {DataControl} from './_data-control';

/**
 * <example>
 *   <b-data-grid items=" [{name: 'John Doe'}, {name: 'Joe Bloggs'}] ">
 *     <b-data-grid-column field="name" text="Name" />
 *     <b-data-grid-column field="name.length" text="Len" />
 *   </b-data-grid>
 * </example>
 */
export class DataGrid extends DataControl{
  init(){
    super.init();

    this.columns = [];
  }

  getClassName(){
    return `table table-bordered ${super.getClassName()}`;
  }

  createItemView(item){
    return new Row();
  }

  render(){
    // works with ng-repeat/ng-if
    // LATER: new array instance -> items are re-appended each time
    this.columns = _.map(_.filter(this.options.children, {nodeType: 1}), 'dataGridColumn');

    super.render();
  }

  renderItemView(row, item){
    row.getElement().innerHTML = _.map(this.columns, (c) => {
      return `<td>${_.escape(_.get(item, c.options.field))}</td>`;
    }).join('');
  }
}

DataGrid._template = `
  <table class="{{ this.getClassName() }}">
    <thead>
      <tr children="{{ this.options.children }}" />
    </thead>
    <tbody children="{{ this.getItemElements() }}" />
  </table>
`;

DataGrid.setDefaults({
  children: [],
  items: []
});

class Row extends Control{

}

Row._template = `
  <tr />
`;
