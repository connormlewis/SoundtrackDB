import React, { Component } from 'react'; 
import SplashCarousel from './SplashCarousel';
import SplashDescription from './SplashDescription';

class Splash extends Component {
  render() {
    return (
      <div>
        <div>
          <SplashCarousel />
        </div>
        <p><br/></p>
        <div>
          <SplashDescription />
        </div>
      </div>
    );
  }
}

export default Splash;
