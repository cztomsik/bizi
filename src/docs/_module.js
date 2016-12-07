import _ from 'lodash';
import $ from 'jquery';
import angular from 'angular';
import dedent from 'dedent';

import ngBizi from '../_angular';

// ES6
import 'babel-polyfill';

export const docs = angular.module('docs', [ngBizi.name]);

// regenerator
docs.run(($q) => {
  window.Promise = $q;
});

// make angular great again
docs.filter('tpl', ($templateCache) => {
  return (tpl) => {
    return $templateCache.put(tpl, tpl) && tpl;
  };
});

docs.directive('example', ($compile) => {
  return {
    restrict: 'E',
    scope: true,
    compile: ($el, $att) => {
      const html = dedent($el.html()).trim();

      $el.html(`
        <div class="panel panel-default">
          <div class="panel-body" ng-include=" html | tpl "></div>
          <pre class="panel-footer m-0" style="border: 0">{{ html }}</pre>
        </div>
      `);

      return ($scope) => {
        $scope.html = html;
      };
    }
  };
});
