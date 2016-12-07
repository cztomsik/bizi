import _ from 'lodash';
import * as b from 'bizi';

import {docs} from './_module';

docs.component('components', {
  template: `
    <div style="display: table-row; width: 200px">
      <div style="display: table-cell">
        <b-list class="nav nav-list" items=" $ctrl.components " ng-model=" $ctrl.component " ng-change=" $ctrl.fetchDoc() " />
      </div>

      <div style="display: table-cell; width: 100%">
        <div class="container-fluid">
          <h3>{{ $ctrl.component.name }}</h3>

          <b-tab-control>
            <b-tab-item header="Examples">
              <div ng-include=" $ctrl.doc | tpl "></div>
            </b-tab-item>

            <b-tab-item header="Options">
              <!-- LATER: split by super classes, ignore already overridden super-options -->

              <!-- TODO: ng-if/repeat operates on original element -->
              <div>
                <b-data-grid items=" $ctrl.getDefaults() " ng-if=" $ctrl.component ">
                  <b-data-grid-column field="name" text="Option" />

                  <!-- TODO: wrap value in <code>{{ v | json }}</code> -->
                  <b-data-grid-column field="default" text="Default" />
                </b-data-grid>
              </div>
            </b-tab-item>
          </b-tab-control>
        </div>
      </div>
    </div>
  `,

  controller: class ComponentsCtrl{
    constructor($http){
      this.$http = $http;
    }

    async $onInit(){
      this.components = _.values(b);
      this.component = this.components[5];_.first(this.components);

      await this.fetchDoc();

      // sample items for virtual rendering
      this.items = _.range(100).map(n => ({name: 'n' + n + ' ' + Math.random()}));
    }

    notify(msg){
      alert(msg);
    }

    async fetchDoc(){
      this.doc = null;

      const js = (await this.$http.get(`src/${_.kebabCase(this.component.name)}.js`)).data;
      const codeAndDocs = _.unzip(_.chunk(js.split(/\* (.*)/g), 2));

      this.doc = codeAndDocs[1].join('\n');
    }

    getDefaults(){
      return _.map(_.keysIn(this.component.defaults), (k) => {
        return {
          name: k,
          default: this.component.defaults[k]
        };
      });
    }
  }
});
