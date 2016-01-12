'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function cssFor(cls, prefix) {
  for (var _len = arguments.length, opts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    opts[_key - 2] = arguments[_key];
  }

  return [cls, prefix].concat(opts.map(prefixOpt)).filter(Boolean).join(' ');

  function prefixOpt(opt) {
    return opt ? prefix + '-' + opt : '';
  }
}

exports['default'] = {
  'for': cssFor
};
module.exports = exports['default'];