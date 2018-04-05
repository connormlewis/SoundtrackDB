import React, { Component, Fragment } from 'react';
import { Navbar, Container, Nav, NavItem } from 'reactstrap';
import { UISref, UISrefActive } from '@uirouter/react';
import SearchBar from './SearchBar'

class Navigation extends Component {

  search(searchTerm) {
    const { stateService } = this.props.router;
    stateService.go('searchResults', { searchTerm: searchTerm, offset: 0, limit: 10 });
  }

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
                  <UISref to="album">
                    <div className="nav-link" style={{ cursor: 'pointer' }}>Albums</div>
                  </UISref>
                </NavItem>
              </UISrefActive>
              <UISrefActive class="active">
                <NavItem>
                  <UISref to="artist">
                    <div className="nav-link" style={{ cursor: 'pointer' }}>Artists</div>
                  </UISref>
                </NavItem>
              </UISrefActive>
              <UISrefActive class="active">
                <NavItem>
                  <UISref to="media">
                    <div className="nav-link" style={{ cursor: 'pointer' }}>Media</div>
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
            <Nav className="ml-auto">
              <SearchBar onSubmit={(searchTerm) => this.search(searchTerm)} placeholder="Search Everywhere"/>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation; 