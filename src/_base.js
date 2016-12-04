import _ from 'lodash';

export const lib = {};

export class Base{
  constructor(options = {}){
    this._initDefaults();
    this.applyOptions(options);
    this.init();

    this._view = createView(this.constructor._template, this, this.constructor.name);
  }

  init(){

  }

  render(){
    this._view.render();
  }

  getElement(){
    return this._view.getElement();
  }

  destroy(){
    this._view.destroy();
  }

  getClassName(){
    return `${( ! this.options.visible) && 'hide'} ${this.options.className}`;
  }

  applyOptions(options){
    // LATER: throw on options.hidden

    _.assign(this.options, options);
  }

  _initDefaults(){
    this.options = Object.create(this.constructor.defaults);
  }

  static getDefaults(){
    // ES6 static inheritance
    const defs = this.hasOwnProperty('defaults') && this.defaults;

    return _.pick(defs, Object.getOwnPropertyNames(defs));
  }

  // LATER: user-space overrides
  static setDefaults(defaults){
    this.defaults = _.assign(Object.create(Object.getPrototypeOf(this).defaults || {}), defaults);
  }
}

// LATER: !options.animated -> transition-property: none, animation: none, transform: none

// options are optional -> every option has a default
Base.setDefaults({
  visible: true,
  className: ''
});

// LATER: factor out
function createView(tpl, context, name){
  const t = compile(tpl, name);
  const cs = [];
  const els = [];
  const el = t.create.call(context, h, c, lib);

  return {
    getElement(){
      return el;
    },

    render(){
      t.updateBindings.call(context, cs, els, updateEl);
      _.forEach(cs, _.method('render'));
    },

    destroy(){
      _.forEach(cs, _.method('destroy'));
    }
  };

  // LATER: compile in fn.toSource()
  function h(tagName, options, contents){
    const el = document.createElement(tagName);
    els.unshift(el);

    updateEl(el, _.defaults(options, {children: getContentNodes(contents)}));

    return el;
  }

  function c(Comp, options, contents){
    const c = new Comp(_.defaults(options, {children: getContentNodes(contents)}));
    cs.unshift(c);

    return c.getElement();
  }
}

function getContentNodes(contents){
  return _.map(contents, (c) => {
    return (_.isString(c)) ?document.createTextNode(c) :c;
  });
}

function updateEl(el, options){
  _.forEach(options, (v, k) => {
    if (k === 'children'){
      setChildNodes(el, v);
      return;
    }

    if (_.isFunction(v)){
      const prop = _.replace(k, /^on[A-Z]\w+/, _.toLower);

      el[prop] = v;
      return;
    }

    const attr = (k === 'className') ?'class' :_.kebabCase(k);

    if (v === false){
      el.removeAttribute(attr);
    } else {
      el.setAttribute(attr, v);
    }
  });

  return el;
}

// devtools friendly
function setChildNodes(el, childNodes){
  // link nodes together at the end of the element
  for (let i = childNodes.length - 1; i >= 0; i--){
    const c = childNodes[i];

    if (c !== el.childNodes[i]){
      el.insertBefore(c, childNodes[i + 1] || null);
    }
  }

  while (childNodes[0] !== el.childNodes[0]){
    el.removeChild(el.firstChild);
  }
}

// benefits:
// - superset of HTML (components inside of <table>)
// - performance
// - debugging
const compile = _.memoize(function compile(tpl, name){
  let ast = parseTpl(tpl);

  //console.log(ast, tpl);

  // LATER: rather compile to one big function (would look better with sourceURL)?
  return {
    create: new Function('h,c,l', `return ${init(ast.childNodes[0])}; //# sourceURL=${name}.create.js`),
    updateBindings: new Function('cs,els,attr', `var ci=cs.length,ei=els.length; ${updateBindings(ast.childNodes[0])} //# sourceURL=${name}.update.js`)
  };
});

function init(node){
  if (node.content){
    return JSON.stringify(node.content);
  }

  if (node.prefix){
    return `c(l.${node.prefix.slice(0, -1)}.${_.upperFirst(_.camelCase(node.tagName))}, ${hash(node.options)}, [${_.join(_.map(node.childNodes, init))}])`;
  }

  return `h("${node.tagName}", ${hash(node.options)}, [${_.join(_.map(node.childNodes, init))}])`;
}

function updateBindings(node){
  if ( ! node.childNodes){
    return;
  }

  const update = (node.prefix)
    ?`cs[--ci].applyOptions(${hash(node.bindings)})`
    :`attr(els[--ei], ${hash(node.bindings)})`
  ;

  return `
    ${_.join(_.map(node.childNodes, updateBindings), ';\n')}
    ${update};
  `;
}

function hash(opts){
  return `{${_.join(_.map(opts, (v, k) => {
    return `${k}: ${v}`;
  }))}}`;
}

const TAG = /<\/([\w-]*)>|<([\w]+-)?([\w-]*)([^>]*?)(\/?)>/g;
const ATT = /(on-[\w-]+)="(\w+)"|([\w-]+)=("{{\s*([\s\S]*?)\s*}}"|"[\s\S]*?")/g;

function parseTpl(tpl){
  let node = {childNodes: []};

  parse(_.trim(tpl), TAG, (content, close, prefix, tagName, attrs, selfClose) => {
    if (content){
      node.childNodes.push({content: content});
    }

    if (tagName){
      node = {parent: node, prefix: prefix, tagName: tagName, childNodes: [], options: {}, bindings: {}};
      node.parent.childNodes.push(node);

      parse(attrs, ATT, (s, listener, handler, opt, str, expr) => {
        //console.log([s, listener, handler, opt, str, expr]);

        if (listener){
          node.options[_.camelCase(listener)] = `this.${handler}.bind(this)`;
        }

        if (opt){
          opt = (opt === 'class') ?'className' :_.camelCase(opt);

          node.options[opt] = expr || str;

          if (expr){
            node.bindings[opt] = expr;
          }
        }
      });
    }

    if (close || selfClose){
      node = node.parent;
    }
  });

  return node;
}

function parse(str, pattern, cb){
  return _.forEach(_.chunk(str.split(pattern), cb.length), _.spread(cb));
}
