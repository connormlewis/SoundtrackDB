import React, { Component, Fragment } from 'react';
import { Navbar, Container, Nav, NavItem } from 'reactstrap';
import { UISref, UISrefActive } from '@uirouter/react';

class Navigation extends Component {


  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }
  search(e) {
    e.preventDefault();
    const { stateService } = this.props.router;
    stateService.go('searchResults', { searchTerm: this.state.searchTerm });
  }

  updateInputValue(evt) {
    this.setState({
      searchTerm: evt.target.value
    });
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
              <form className="form-inline my-2 my-lg-0" onSubmit={evt => this.search(evt)}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={evt => this.updateInputValue(evt)} aria-label="Search"></input>
                <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </Nav>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default Navigation; 