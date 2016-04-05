import Component from './component';

class Sidebar extends Component{

}

Sidebar._template = `
  <div class="sidebar">
    <style>
      .sidebar{
        float: left;
        width: 300px;
        min-height: 20em;
        background: #ccc;
      }
    </style>

    <content></content>
  </div>
`;

export default Sidebar;
