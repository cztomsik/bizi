import _ from 'lodash';
import {Base} from './_base';
import {TabItem} from './tab-item';

/**
 * <example>
 *   <b-tab-control>
 *     <b-tab-item header="Tab 1">
 *       Hello
 *     </b-tab-item>
 *     <b-tab-item header="Tab 2">
 *       World
 *     </b-tab-item>
 *   </b-tab-control>
 * </example>
 */
export class TabControl extends Base{
  init(){
    super.init();

    this.tabItems = [];
    this.activeIndex = 0;
  }

  //LATER: list.onItemRender
  render(){
    // works with ng-repeat/ng-if
    // LATER: new array instance -> items are re-appended each time
    this.tabItems = _.map(_.filter(this.options.children, {nodeType: 1}), 'tabItem');

    const activeTab = this.getActiveTabItem();

    super.render();

    _.forEach(this.tabItems, (t, i) => {
      t.applyOptions({visible: t === activeTab});
      t.render();
    });
  }

  getActiveTabItem(){
    return this.tabItems[this.activeIndex] || _.first(this.tabItems);
  }

  selectTabItem(t){
    this.activeIndex = _.indexOf(this.tabItems, t);
    this.render();
  }
}

TabControl._template = `
  <div class="{{ this.getClassName() }}">
    <b-list class="nav nav-tabs" items="{{ this.tabItems }}" value="{{ this.getActiveTabItem() }}" on-value="selectTabItem" />

    <div class="tab-content" children="{{ this.options.children }}" />
  </div>
`;

TabControl.setDefaults({
  children: []
});
