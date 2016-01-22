class Element{
  constructor(opts){
    this.el = document.createElement(opts.tagName);

    this.reset(opts);
  }

  reset(opts){
    if (opts.tagName !== this.el.localName){
      throw new Error('tagName cannot be changed in runtime');
    }

    for (var k in opts){
      if (k === 'tagName'){
        continue;
      }

      if (k === 'children'){
        this.el.innerHTML = '';
        opts.children.forEach(c => this.el.appendChild(c.el));
        continue;
      }

      if ((k === 'className') && ( ! opts[k])){
        this.el.removeAttribute('class');
        continue;
      }

      if ((k === 'placeholder') && ( ! opts[k])){
        this.el.removeAttribute('placeholder');
        continue;
      }

      this.el[k] = opts[k];
    }
  }

  destroy(){
    // TODO: rethink this
    // clean up (DOM leaks)
    this.el.onclick = null;
    this.el.onchange = null;
    this.el.onclick = null;

    this.el = null;
  }
}

export default Element;
