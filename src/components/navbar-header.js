import React, {Component} from 'react';
import {dispatch,connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Nav, Navbar, NavItem, Input, NavDropdown, MenuItem} from 'react-bootstrap';

import Searchbar from '../components/searchbar';

class NavbarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { tab: this.props.tab }
  }

  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a> TweetchTV </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={this.props.tab} onSelect={this.props.changeTab}>
            <NavItem eventKey={1} href="#"> Featured </NavItem>
            <NavItem eventKey={2}> My Favs </NavItem>
            <NavItem eventKey={3}> My Videos </NavItem>
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
          <Nav pullRight>
            <Searchbar/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarHeader;