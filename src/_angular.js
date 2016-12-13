import _ from 'lodash';
import angular from 'angular';
import * as b from 'bizi';

export const ngBizi = angular.module('bizi', []);

_.forEach(b, (Comp) => {
  const defaults = Comp.defaults;

  ngBizi.directive(`b${Comp.name}`, ($compile, $parse, $interpolate) => {
    return {
      restrict: 'E',
      scope: true,
      require: '?ngModel',
      compile: ($el, $att) => {
        const listeners = {};
        const bindings = {};

        // prepare listeners & bindings
        _.forEach($att, (v, k) => {
          const opt = k === 'class' ?'className' :k;

          // ignore ng
          if (_.startsWith(opt, '$')){
            return;
          }

          // ignore other directives
          if ( ! (opt in defaults)){
            return;
          }

          // listeners
          if (_.startsWith($att.$attr[opt], 'on-')){
            const handler = $parse(v);

            listeners[opt] = ($scope, $event) => {
              handler($scope, {$event: $event});
              $scope.$apply();
            };
            return;
          }

          // text options
          if (opt.match(/text|color|href|header|placeholder|title|className|field/)){
            bindings[opt] = $interpolate(v);
            return;
          }

          bindings[opt] = $parse(v);

          // LATER: opt
          // (should work even for $interpolate)
          //
          //   const $exp = $parse(v);
          //
          //   if ($exp.constant){
          //     staticOptions[opt] = $exp();
          //   } else {
          //     bindings[opt] = $exp;
          //   }
        });

        return function($scope, $el, $linkAtt, ngModel){
          // create instance with bound listeners
          const options = {};
          const c = new Comp(_.mapValues(listeners, (l) => {
            return _.partial(l, $scope);
          }));

          $scope.$on('$destroy', _.bindKey(c, 'destroy'));

          // ngModel integration
          if (ngModel){
            ngModel.$render = () => {
              c.applyOptions({value: ngModel.$modelValue});
              c.render();
            };

            c.applyOptions({onValue: (v) => {
              ngModel.$setViewValue(v);
            }});
          }

          // containers
          const $contents = $el.contents();

          if ($contents.length){
            c.applyOptions({children: $contents});
          }

          render();

          // replace would destroy ng-model scope
          $el[0].parentNode.replaceChild(c.getElement(), $el[0]);

          return;


          function render(){
            // once each digest
            $scope.$$postDigest(function ngRender(){
              // LATER: check
              if ($scope.$$destroyed){
                return;
              }

              // cpu: reuse options
              _.forEach(bindings, (v, k) => {
                options[k] = v($scope);
              });

              c.applyOptions(options);
              c.render();

              _.defer(render);
            });
          }
        };
      }
    };
  });
});

export default ngBizi;
