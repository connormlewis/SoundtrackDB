import React, { Component } from 'react';
import '../style/App.css';
import Navigation from './Navigation'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
