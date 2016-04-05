class Component{
  constructor(options = {}){
    this.options = options;
    this.renderers = [];

    this.init(this.options);
    this._xyz();
  }

  init(/* options */){
    // to be overridden
  }

  set(options){
    this.options = Object.assign({}, this.options, options);

    this.init(this.options);
    this.render();
  }

  render(){
    this.renderers.forEach(fn => fn());
  }

  // defer this until first render?
  // TODO: refactor
  _xyz(){
    const self = this;
    const template = this.constructor._template.trim();
    const contents = window.$.parseHTML(template);

    this.domNode = (contents && (contents.length === 1) && contents[0]) || error('no root node', template);

    this.domNode.comp = this;

    walk(this.domNode);


    function walk(node){
      if ( ! node.localName){
        return;
      }

      for (let k in Component._library){
        const Comp = Component._library[k];
        const compTagName = 'b-' + Comp.name.replace(/\B[A-Z]/, '-$&').toLowerCase();

        if (node.localName !== compTagName){
          continue;
        }

        xyz(Comp, node);
        return;
      }

      if (node.attributes){
        Array.from(node.attributes).forEach((att) => {
          if (att.name.startsWith('$')){
            bindAtt(node, att.name.slice(1), self, att.value);
            node.removeAttribute(att.name);
          }
        });
      }

      if (node.children){
        Array.from(node.children).forEach(walk);
      }
    }

    function bindAtt(el, attName, context, expression){
      const propName = getPropName(attName);

      bind(el, propName, context, expression);
    }

    function bind(target, propName, context, expression){
      target[propName] = evalExpression(context, expression);

      addRenderer(() => {
        console.log('update', propName, expression);
        target[propName] = evalExpression(context, expression);
      });
    }

    function addRenderer(fn){
      self.renderers.push(fn);
    }

    function xyz(Comp, el){
      const $el = window.$(el);
      const $contents = $el.contents();

      $contents.get().forEach(walk);

      // TODO: opts
      const comp = new Comp();

      window.$(comp.domNode).find('content').replaceWith($contents);

      $el.replaceWith(comp.domNode);
    }

    function getPropName(attName){
      const mapping = {
        'class': 'className'
      };

      return mapping[attName] || attName.replace(/-([a-z])/i, match => match[1].toUpperCase());
    }

    function evalExpression(context, expression){
      return eval('context.' + expression);
    }
  }

  destroy(){
    // TODO
  }
}

export default Component;

function error(){
  // cause of angular swallowing
  console.error(Array.from(arguments).join(' '));
  throw new Error(Array.from(arguments).join(' '));
}
