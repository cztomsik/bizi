import {Base} from './_base';

// LATER: button/link?
// LATER: width

/**
 * @see DataGrid
 */
export class DataGridColumn extends Base{
  constructor(options){
    super(options);

    this.getElement().dataGridColumn = this;
  }
}

DataGridColumn._template = `
  <th>
    <b-text value="{{ this.options.text }}" />
  </th>
`;

DataGridColumn.setDefaults({
  field: '',
  text: ''
});
