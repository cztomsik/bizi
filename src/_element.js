class Element{
  constructor(options){
    this.el = document.createElement(options.tagName);

    this.reset(options);
  }

  reset(options){
    if (options.tagName !== this.el.localName){
      throw new Error('tagName cannot be changed in runtime');
    }

    for (var k in options){
      if (k === 'tagName'){
        continue;
      }

      if (k === 'children'){
        if ( ! options.children){
          // Div bounds children so it will be always-present (and possibly undefined)
          continue;
        }

        this.el.innerHTML = '';
        options.children.forEach(childEl => this.el.appendChild(childEl));
        continue;
      }

      if ((k === 'className') && ( ! options[k])){
        this.el.removeAttribute('class');
        continue;
      }

      if ((k === 'placeholder') && ( ! options[k])){
        this.el.removeAttribute('placeholder');
        continue;
      }

      this.el[k] = options[k];
    }
  }

  destroy(){
    // TODO: rethink this
    // clean up (DOM leaks)
    this.el.onclick = null;
    this.el.onchange = null;
    this.el.onsubmit = null;
    this.el.onclick = null;

    this.el = null;
  }
}

export default Element;
