import React, { Component, Fragment } from 'react';
import { Navbar, Container, Nav, NavItem } from 'reactstrap';
import { UISref, UISrefActive } from '@uirouter/react';

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar light className="navbar-expand-md" style={{ backgroundColor: "#d0e2f2" }}>
          <Container fluid>
            <UISref to="home">
              <div className="navbar-brand" style={{ cursor: 'pointer' }}>SoundtrackDB</div>
            </UISref>
            <Nav className="navbar-collapse" navbar>
              <UISrefActive class="active">
                <NavItem>
                  <UISref to="albumHome">
                    <div className="nav-link" style={{ cursor: 'pointer' }}>Albums</div>
                  </UISref>
                </NavItem>
              </UISrefActive>
              <UISrefActive class="active">
                <NavItem>
                  <UISref to="artistHome">
                    <div className="nav-link" style={{ cursor: 'pointer' }}>Artists</div>
                  </UISref>
                </NavItem>
              </UISrefActive>
              <UISrefActive class="active">
                <NavItem>
                  <UISref to="mediaHome">
                    <div className="nav-link" style={{ cursor: 'pointer' }}>TV/Movies</div>
                  </UISref>
                </NavItem>
              </UISrefActive>
              <UISrefActive class="active">
                <NavItem>
                  <UISref to="about">
                    <div className="nav-link" style={{ cursor: 'pointer' }}>About</div>
                  </UISref>
                </NavItem>
              </UISrefActive>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation; 