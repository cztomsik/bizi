import Component from './component';
import Element from './_element';
import View from './view';
import Repeater from './_repeater';
import css from './_css';

// TODO: columns - bindable because of permissions & other dynamic requirements - templates are static and so not a good fit





/**
 *
 *
 *     this.people = [{name: ..., ...}, ...];
 *
 *     this.cols = [
 *       {header: 'Name', tpl: [b.Text, {value: '= item.name'}]},
 *       ...
 *     ]
 *
 *     [b.Datagrid, {
 *       columns: '= cols',
 *       items: '= people'
 *     }]
 *
 *
 *  Intentionally out of scope:
 *    - grouped/custom headers
 *    - column toggles, menus, filters, reorders
 *    - row-expanding
 *    - row-grouping
 *    - multi-sort
 *    - inline editing
 *
 *  TODO:
 *    - striped/bordered/hover flags
 *    - column sorting
 *    - fixed header
 *    - locking
 *
 */
class Datagrid extends Component{
  init({cls, columns, items}){
    this.cls = cls;
    this.columns = columns;
    this.items = items;

    this.colTpl = [Element, {tagName: 'th', innerText: '= item.header'}];

    // wrap `col.tpl`s in `td`s, then wrap all of them in `tr`
    this.rowTpl = [Element, {tagName: 'tr'}, ...this.columns.map(c => [Element, {tagName: 'td'}, ...[c.tpl]])];
  }

  get tableCls(){
    return css.for(this.cls, 'table', 'hover', 'striped', 'bordered');
  }
}

Datagrid.tpl = [Element, {tagName: 'table', className: '= tableCls'},
  [Element, {tagName: 'thead'},
    [Repeater, {tagName: 'tr', items: '= columns', tpl: '= colTpl'}]
  ],

  [Repeater, {tagName: 'tbody', items: '= items', tpl: '= rowTpl'}]
];

export default Datagrid;
