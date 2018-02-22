import React, { Component } from 'react';
import {
  Navbar, 
  NavbarBrand, 
  Container, 
  Nav, 
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler } from 'reactstrap'; 

class Navigation extends Component {
  render() {
    return (
      <Navbar light className="navbar-expand-md" style={{backgroundColor: "#d0e2f2"}}>
        <Container fluid>
          <NavbarBrand href="/">SoundtrackDB</NavbarBrand>
            <Nav className="navbar-collapse" navbar>
              <NavItem>
                <NavLink href="/album">Albums</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/artist">Artist</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tv-movie">TV/Movies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
        </Container>
      </Navbar>
    ); 
  }
}

export default Navigation; 