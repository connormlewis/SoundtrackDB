import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Nav, NavItem, NavLink } from 'reactstrap';
import { UISref } from '@uirouter/react';

class Navigation extends Component {
  render() {
    return (
      <Navbar light className="navbar-expand-md" style={{ backgroundColor: "#d0e2f2" }}>
        <Container fluid>
          <UISref to="home">
            <div className="navbar-brand" style={{ cursor: 'pointer' }}>SoundtrackDB</div>
          </UISref>
          <Nav className="navbar-collapse" navbar>
            <NavItem>
              <UISref to="albumHome">
                <div className="nav-link" style={{ cursor: 'pointer' }}>Albums</div>
              </UISref>
            </NavItem>
            <NavItem>
              <UISref to="artistHome">
                <div className="nav-link" style={{ cursor: 'pointer' }}>Artists</div>
              </UISref>
            </NavItem>
            <NavItem>
              <UISref to="mediaHome">
                <div className="nav-link" style={{ cursor: 'pointer' }}>TV/Movies</div>
              </UISref>
            </NavItem>
            <NavItem>
              <UISref to="about">
                <div className="nav-link" style={{ cursor: 'pointer' }}>About</div>
              </UISref>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation; 