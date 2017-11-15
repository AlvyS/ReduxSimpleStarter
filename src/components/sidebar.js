import React, {Component} from 'react';
import {connect} from 'react-redux';
import { push as Menu } from 'react-burger-menu';

class Sidebar extends Component {

  openSidebar(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Menu pageWrapId={'page-wrap'} isOpen={true} noOverlay>
          <main id='page-wrap'>
            <input placeholder='Search here'> </input>
            <a id="sidebar-first" className="sidebar-first"> First </a>
            <a onClick={this.openSidebar} className='menu-item--small' href=''>sidebar</a>
          </main>
        </Menu>
      </div>
    )
  }
}

export default Sidebar;