import {Base} from './_base';

/**
 * <example>
 *   <b-navbar>
 *     <b-list class="nav navbar-nav" items=" [{name: 'Home'}, {name: 'About'}] " />
 *   </b-navbar>
 * </example>
 *
 * <example>
 *   <b-navbar color="inverse" />
 * </example>
 */
export class Navbar extends Base{
  init(){
    super.init();

    this.collapsed = true;
  }

  getClassName(){
    return `navbar navbar-${this.options.color} m-0 ${super.getClassName()}`;
  }

  getCollapseClassName(){
    return `${this.collapsed && 'collapse'} navbar-collapse`;
  }

  toggleCollapsed(){
    this.collapsed = ! this.collapsed;
    this.render();
  }
}

Navbar._template = `
  <nav class="{{ this.getClassName() }}">
    <div class="container-fluid">
      <div class="navbar-header">
        <b-button class="navbar-toggle" text=":menu" on-click="toggleCollapsed" />
        <a class="navbar-brand" href="#">Bizi</a>
      </div>

      <div class="{{ this.getCollapseClassName() }}" children="{{ this.options.children }}" />
    </div>
  </nav>
`;

Navbar.setDefaults({
  children: [],
  color: 'default'
});
