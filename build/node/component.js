/**
 * Base class for high-level components
 *
 * Intented usage:
 *
 *     import * as b from 'bizi';
 *
 *     class Counter extends b.Component{
 *       init(){
 *         this.count = 0;
 *       }
 *
 *       dec(){
 *         this.count--;
 *       }
 *
 *       inc(){
 *         this.count++;
 *       }
 *     }
 *
 *     Counter.tpl = [b.Well, {},
 *       [b.Text, {value: '= count'}],
 *       [b.Btn, {text: '--', onClick: '() dec'}],
 *       [b.Btn, {text: '++', onClick: '() inc'}]
 *     ];
 *
 * @param opts
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Component = (function () {
  function Component(opts) {
    var _this = this;

    _classCallCheck(this, Component);

    var res = this.init(opts);

    this.comps = [];
    this.bindings = [];

    // TODO: meaningful stack trace
    this.el = applyTpl.apply(this, this.constructor.tpl).el;

    // useful for debugging:
    // - inspect element
    // - leaked DOM element
    // you should not use it to get component instances
    this.el.biziComp = this;

    this.render();

    if (res && res.then) {
      res.then(function () {
        _this.render();
      });
    }
  }

  /**
   * Set *all* your props to initial state
   * - instance will be sealed then
   * - called during object construction/reset
   * @param opts
   */

  _createClass(Component, [{
    key: 'init',
    value: function init(opts) {}

    /**
     * Re-initialize whole state with with new opts.
     * - instead of doing it partially in setters
     * - called by owner for data-bound changes
     *
     * @param opts
     */
  }, {
    key: 'reset',
    value: function reset(opts) {
      this.init(opts);
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      // if component was destroyed during change
      if (!this.el) {
        return;
      }

      // should be enough (triggers reset which in turn should update $el)
      this.bindings.forEach(function (updateBinding) {
        updateBinding();
      });
    }

    /**
     * Do clean-up here (listeners). Don't forget to call super.destroy() when finished
     */
  }, {
    key: 'destroy',
    value: function destroy() {
      this.comps.forEach(function (c) {
        c.destroy();
      });

      for (var k in this) {
        this[k] = null;
      }
    }
  }]);

  return Component;
})();

function applyTpl(Comp) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var _this2 = this;

  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var boundOpts = {};

  // shared (from tpl), we need to make a copy
  opts = Object.assign({}, opts);

  if (!('children' in opts) && children.length) {
    opts.children = children.map(function (tpl) {
      return applyTpl.apply(_this2, tpl);
    });
  }

  // `& obj.prop` shortcut
  for (var k in opts) {
    var v = opts[k];

    if (typeof v === 'string' && v.startsWith('& ')) {
      opts[k] = '=' + v.slice(1);
      opts['on' + k.slice(0, 1).toUpperCase() + k.slice(1)] = setter(this, v.slice(2));
    }
  }

  for (var k in opts) {
    opts[k] = resolveOpt(opts[k], k, this);
  }

  var c = new Comp(opts);

  var _loop = function (k) {
    _this2.bindings.unshift(watch(boundOpts[k], function (v) {
      opts[k] = v;
      c.reset(opts);
    }));
  };

  for (var k in boundOpts) {
    _loop(k);
  }

  this.comps.push(c);

  return c;

  function resolveOpt(v, propName, comp) {
    if (typeof v === 'string') {
      if (v.startsWith('() ')) {
        var _ret2 = (function () {
          var methName = v.slice(3);

          // TODO: reconsider this - closure will be shown in stacktrace
          // regular function because of `arguments` visibility
          return {
            v: function () {
              var res = comp[methName].apply(comp, arguments);
              comp.render();

              if (res && res.then) {
                res.then(function () {
                  comp.render();
                });
              }
            }
          };
        })();

        if (typeof _ret2 === 'object') return _ret2.v;
      }

      if (v.startsWith('= ')) {
        var expression = createExpression(v.slice(2), comp);
        boundOpts[propName] = expression;

        return expression();
      }
    }

    return v;
  }
}

function createExpression(expStr, comp) {
  /* jshint evil: true */
  return new Function('data', 'return data.' + expStr).bind(null, comp);
}

function watch(resolve, listener) {
  var oldVal = resolve();

  return function () {
    var val = resolve();

    if (val !== oldVal) {
      listener(val);
      oldVal = val;
    }
  };
}

function setter(obj, path) {
  return new Function('obj, v', 'obj.' + path + ' = v; obj.render();').bind(null, obj);
}

exports['default'] = Component;
module.exports = exports['default'];