import React, { Component } from 'react';
import '../style/App.css';
import Navigation from './Navigation'; 
import {UIView} from '@uirouter/react';
import {Container} from 'reactstrap'; 


const conStyle = {
  backgroundColor: "#E9EBEE",
};

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column">
        <Navigation router={this.props.router}/>
        <Container fluid className="flex-grow pt-2" style={conStyle}>
          <UIView />
        </Container>
      </div>
    );
  }
}

export default App;
