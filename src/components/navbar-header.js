import React, {Component} from 'react';
import {Nav, Navbar, NavItem, Input, NavDropdown, MenuItem} from 'react-bootstrap';

class NavbarHeader extends Component {

  render() {

  let brand = <a href='#'>Brand</a>;

    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Twitch-Viewer</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Home</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavItem eventKey={3} href="#">My Videos</NavItem>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>My Account</MenuItem>
              <MenuItem eventKey={3.2}>Profile</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarHeader;