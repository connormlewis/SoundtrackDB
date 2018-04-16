import React, { Component, Fragment } from 'react';
import { Navbar, Container, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { UISref, UISrefActive } from '@uirouter/react';
import SearchBar from './SearchBar';
import "../style/Navigation.css";
import img from '../static/logo.png'

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

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
              <div className="navbar-brand" style={{ cursor: 'pointer' }}>
                <img className="nav-logo" src={img} alt="logo"></img>
              </div>
            </UISref>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
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
              <Nav>
                <div className="search-bar">
                <SearchBar onSubmit={(searchTerm) => this.search(searchTerm)} placeholder="Search Everywhere"/>
                </div>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation; 