import {Base} from './_base';

/**
 * (WIP)
 *
 * <example>
 *   <b-dialog title="Title">
 *     Body
 *   </b-dialog>
 * </example>
 */
export class Dialog extends Base{

}

Dialog._template = `
  <div role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title">
            <b-text value="{{ this.options.title }}" />
          </h4>
        </div>

        <div class="modal-body" children="{{ this.options.children }}" />

        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
`;

Dialog.setDefaults({
  children: [],
  title: ''
});
