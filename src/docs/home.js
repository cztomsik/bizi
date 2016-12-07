import _ from 'lodash';

import {docs} from './_module';

docs.component('home', {
  template: `
    <div class="container-fluid">
      <h3>Bizi</h3>

      <pre>{{ $ctrl.readme }}</pre>

      <!-- LATER: angular jsbin -->
    </div>
  `,

  controller: class HomeCtrl{
    constructor($http){
      this.$http = $http;
    }

    async $onInit(){
      this.readme = (await this.$http.get('README.md')).data;
    }
  }
});
