import {Base} from './_base';

/**
 * @see TabControl
 */
export class TabItem extends Base{
  // LATER: ListItem text
  get name(){
    return this.options.header;
  }

  constructor(options){
    super(options);

    this.getElement().tabItem = this;
  }
}

TabItem._template = `
  <div
    class="{{ this.getClassName() }}"
    children="{{ this.options.children }}"
  />
`;

TabItem.setDefaults({
  children: [],
  header: ''
});
