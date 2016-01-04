import Component from './component';
import Element from './_element';
import Repeater from './_repeater';
import css from './_css';

class Datagrid extends Component{
  init({cls, items}){
    this.cls = cls;
    this.items = items;

    this.keys = Object.keys(this.items[0] || {});

    this.col = (k) => {
      return new Element({
        tagName: 'td',
        innerText: k
      });
    };

    this.row = (it) => {
      return new Element({
        tagName: 'tr',
        children: this.keys.map((k) => {
          return new Element({
            tagName: 'td',
            innerText: it[k]
          });
        })
      });
    };
  }

  get repeaterCls(){
    return css.for(this.cls, 'table', 'bordered');
  }
}

Datagrid.tpl = [Element, {tagName: 'table', className: '= repeaterCls'},
  [Element, {tagName: 'thead'},
    [Repeater, {tagName: 'tr', items: '= keys', xyz: '= col'}]
  ],

  [Repeater, {tagName: 'tbody', items: '= items', xyz: '= row'}]
];

export default Datagrid;
