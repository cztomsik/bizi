function cssFor(cls, prefix, ...opts){
  return [cls, prefix].concat(opts.map(prefixOpt)).filter(Boolean).join(' ');


  function prefixOpt(opt){
    return (opt) ?`${prefix}-${opt}` :'';
  }
}

export default {
  'for': cssFor
};