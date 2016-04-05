function css(...names){
  return names.join(' ');
}

function init(){
  document.head.insertAdjacentHTML('beforeend', `<style>
    /* backported from bs4 */
    .m-a-0{margin: 0 !important}
    .m-t-0{margin-top: 0 !important}
    .m-r-0{margin-right: 0 !important}
    .m-b-0{margin-bottom: 0 !important}
    .m-l-0{margin-left: 0 !important}

    .p-a-0{padding: 0 !important}
    .p-t-0{padding-top: 0 !important}
    .p-r-0{padding-right: 0 !important}
    .p-b-0{padding-bottom: 0 !important}
    .p-l-0{padding-left: 0 !important}
  </style>`);
}

css.init = init;

export default css;
