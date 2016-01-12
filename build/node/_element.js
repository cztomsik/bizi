'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Element = (function () {
  function Element(opts) {
    _classCallCheck(this, Element);

    this.el = document.createElement(opts.tagName);

    this.reset(opts);
  }

  _createClass(Element, [{
    key: 'reset',
    value: function reset(opts) {
      var _this = this;

      if (opts.tagName !== this.el.localName) {
        throw new Error('tagName cannot be changed in runtime');
      }

      for (var k in opts) {
        if (k === 'tagName') {
          continue;
        }

        if (k === 'children') {
          this.el.innerHTML = '';
          opts.children.forEach(function (c) {
            return _this.el.appendChild(c.el);
          });
          continue;
        }

        if (k === 'className' && !opts[k]) {
          this.el.removeAttribute('class');
          continue;
        }

        if (k === 'placeholder' && !opts[k]) {
          this.el.removeAttribute('placeholder');
          continue;
        }

        this.el[k] = opts[k];
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.el = null;
    }
  }]);

  return Element;
})();

exports['default'] = Element;
module.exports = exports['default'];