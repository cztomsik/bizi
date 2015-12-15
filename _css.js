// QnD
function bsClass(opts) {
  let res = [];

  if (opts.base){
    res.push(opts.base);

    if (opts.variant){
      res.push(`${opts.base}-${opts.variant}`);
    }

    if (opts.size){
      res.push(`${opts.base}-${opts.size}`);
    }
  }

  if (opts.cssClass){
    res.push(opts.cssClass);
  }

  return res.join(' ');
}

function cssFor(cssClass, prefix, ...opts){
  return [cssClass, prefix].concat(opts.map(prefixOpt)).filter(Boolean).join(' ');


  function prefixOpt(opt){
    return (opt) ?`${prefix}-${opt}` :'';
  }
}

export default {
  'for': cssFor,
  bsClass
};