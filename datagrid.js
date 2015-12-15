import $ from 'jquery';

class Datagrid{
  constructor(opts){
    this.$el = $('<table>');
    this.el = this.$el[0];

    this.reset(opts);
  }

  reset(opts){
    this.$el.attr({
      class: 'table table-bordered ' + opts.cssClass
    });

    this.$el.empty();

    this.$el.append('<tr><td>TODO: datagrid</td></tr>');

    opts.items.forEach((it) => {
      const $row = $('<tr><td></td></tr>');

      $row.find('td').text(it.name);

      this.$el.append($row);
    });
  }

  destroy(){
    this.$el.remove();
    this.$el = null;
  }
}

export default Datagrid;
