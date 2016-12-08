import _ from 'lodash';

import {docs} from './_module';

import './home';
import './components';

docs.component('app', {
  template: `
    <style ng-bind=" $ctrl.theme.style "></style>

    <style>
      /* BS4 */
      .w-100{width: 100%}
      .h-100{height: 100%}
      .m-0{margin: 0}

      /* LATER */
      .nav-tabs{
        margin-bottom: 15px;
      }
      .nav-list > .active{
        background: rgba(0, 0, 0, 0.1)
      }
    </style>

    <b-navbar class="navbar-static-top">
      <b-list class="nav navbar-nav" items=" $ctrl.pages " ng-model=" $ctrl.page " />

      <div class="navbar-right navbar-form">
        <b-combo-box items=" $ctrl.themes " ng-model=" $ctrl.theme " />
      </div>
    </b-navbar>

    <div ng-if=" $ctrl.page " ng-include=" $ctrl.page.tpl | tpl "></div>
  `,
  controller: class AppCtrl{
    constructor($location){
      this.$location = $location;
    }

    $onInit(){
      this.pages = [
        {name: 'Home', tpl: '<home />'},
        {name: 'Components', tpl: '<components />'}
      ];

      this.page = this.pages[1];

      this.themes = [
        {name: 'Bootstrap 3', style: '@import "node_modules/bootstrap/dist/css/bootstrap.min.css";'},
        {name: 'TODC', style: '@import "//cdnjs.cloudflare.com/ajax/libs/todc-bootstrap/3.3.6-3.3.6/css/bootstrap.min.css"; @import "//cdnjs.cloudflare.com/ajax/libs/todc-bootstrap/3.3.6-3.3.6/css/todc-bootstrap.min.css";'},
        {name: 'Flatly', style: '@import "//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/flatly/bootstrap.min.css";'},
        {name: 'Yeti', style: '@import "//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/yeti/bootstrap.min.css";'},
        {name: 'Sandstone', style: '@import "//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/sandstone/bootstrap.min.css";'},
        {name: 'United', style: '@import "//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/united/bootstrap.min.css";'},
        {name: 'Lumen', style: '@import "//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/lumen/bootstrap.min.css";'},
        {name: 'Cosmo', style: '@import "//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/cosmo/bootstrap.min.css";'},
        {name: 'Paper', style: '@import "//cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/paper/bootstrap.min.css";'},
        {name: 'AdminLTE', style: '@import "//cdnjs.cloudflare.com/ajax/libs/todc-bootstrap/3.3.6-3.3.6/css/bootstrap.min.css"; @import "//rawgit.com/almasaeed2010/AdminLTE/master/dist/css/AdminLTE.css";'},
        {name: 'Flat-UI', style: '@import "//cdnjs.cloudflare.com/ajax/libs/todc-bootstrap/3.3.6-3.3.6/css/bootstrap.min.css"; @import "//rawgit.com/designmodo/Flat-UI/master/dist/css/flat-ui.css";'}
      ];

      this.theme = _.first(this.themes);
    }
  }
});
