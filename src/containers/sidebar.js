import React, {Component} from 'react';
import {connect} from 'react-redux';

class Sidebar extends Component {

  render() {

    return (

      <div className="wrapper">
      
              <nav id="sidebar">
                  
                  <div className="sidebar-header">
                      <div>Collapsible Sidebar</div>
                      <strong>BS</strong>
                  </div>
      
                  
                  <ul className="list-unstyled components">
                      <li className="active">
                          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                              <i className="glyphicon glyphicon-home"></i>
                              Home
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i className="glyphicon glyphicon-briefcase"></i>
                              About
                          </a>
                          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                              <i className="glyphicon glyphicon-duplicate"></i>
                              Pages
                          </a>
                          <ul className="collapse list-unstyled" id="pageSubmenu">
                              <li><a href="#">Page 1</a></li>
                              <li><a href="#">Page 2</a></li>
                              <li><a href="#">Page 3</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="#">
                              <i className="glyphicon glyphicon-link"></i>
                              Portfolio
                          </a>
                      </li>
                      <li>
                          <a href="#">
                              <i className="glyphicon glyphicon-send"></i>
                              Contact
                          </a>
                      </li>
                  </ul>
              </nav>
      
              <div id="content">
                  <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                      <i className="glyphicon glyphicon-align-left"></i>
                      Toggle Sidebar
                  </button>
              </div>
      
      </div>

    )
  }
}

export default Sidebar;