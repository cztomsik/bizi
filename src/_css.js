function cssFor(cls, prefix, ...names){
  return join(filter(cls, prefix, ...prefixNames(prefix, ...names)));
}

function join(names){
  return names.join(' ');
}

function filter(...names){
  return names.filter(Boolean);
}

function prefixNames(prefix, ...names){
  return names.map(n => (n ?`${prefix}-${n}` :''));
}

function init(){
  document.head.insertAdjacentHTML('beforeend', `<style>
    .bg-default{background: transparent}
    .bg-faded{background: #eef}
  </style>`);
}

export default {
  filter: filter,
  join: join,
  prefix: prefixNames,
  'for': cssFor,
  init: init
};
