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

// DataView?

var Repeater = (function (_Component) {
  _inherits(Repeater, _Component);

  function Repeater() {
    _classCallCheck(this, Repeater);

    _get(Object.getPrototypeOf(Repeater.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Repeater, [{
    key: 'init',

    // TODO: destroy, detect changes, consider merging?
    value: function init(_ref) {
      var _this = this;

      var tagName = _ref.tagName;
      var className = _ref.className;
      var items = _ref.items;
      var xyz = _ref.xyz;

      this.tagName = tagName;
      this.className = className;
      this.items = items;
      this.xyz = xyz;

      this.children = this.items.map(function (it) {
        return _this.xyz(it);
      });
    }
  }]);

  return Repeater;
})(_component2['default']);

Repeater.tpl = [_element2['default'], {
  tagName: '= tagName',
  className: '= className',
  children: '= children'
}];

exports['default'] = Repeater;
module.exports = exports['default'];