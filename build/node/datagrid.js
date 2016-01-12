'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _component = require('./component');

var _component2 = _interopRequireDefault(_component);

var _element = require('./_element');

var _element2 = _interopRequireDefault(_element);

var _repeater = require('./_repeater');

var _repeater2 = _interopRequireDefault(_repeater);

var _css = require('./_css');

var _css2 = _interopRequireDefault(_css);

var Datagrid = (function (_Component) {
  _inherits(Datagrid, _Component);

  function Datagrid() {
    _classCallCheck(this, Datagrid);

    _get(Object.getPrototypeOf(Datagrid.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Datagrid, [{
    key: 'init',
    value: function init(_ref) {
      var _this = this;

      var cls = _ref.cls;
      var items = _ref.items;

      this.cls = cls;
      this.items = items;

      this.keys = Object.keys(this.items[0] || {});

      this.col = function (k) {
        return new _element2['default']({
          tagName: 'td',
          innerText: k
        });
      };

      this.row = function (it) {
        return new _element2['default']({
          tagName: 'tr',
          children: _this.keys.map(function (k) {
            return new _element2['default']({
              tagName: 'td',
              innerText: it[k]
            });
          })
        });
      };
    }
  }, {
    key: 'repeaterCls',
    get: function get() {
      return _css2['default']['for'](this.cls, 'table', 'bordered');
    }
  }]);

  return Datagrid;
})(_component2['default']);

Datagrid.tpl = [_element2['default'], { tagName: 'table', className: '= repeaterCls' }, [_element2['default'], { tagName: 'thead' }, [_repeater2['default'], { tagName: 'tr', items: '= keys', xyz: '= col' }]], [_repeater2['default'], { tagName: 'tbody', items: '= items', xyz: '= row' }]];

exports['default'] = Datagrid;
module.exports = exports['default'];