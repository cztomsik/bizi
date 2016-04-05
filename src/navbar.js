import Component from './component';
import css from './_css';

class Navbar extends Component{
  init({className}){
    this.divClassName = css(className, 'navbar navbar-static-top m-a-0 navbar-default');
  }
}

Navbar._template = `
  <nav $class="divClassName">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href=".">Navbar</a>
      </div>

      <!-- TODO: sidebar collapse -->

      <div class="collapse navbar-collapse">
        <content></content>
      </div>
    </div>
  </nav>
`;

export default Navbar;
