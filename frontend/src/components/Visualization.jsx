import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

import { ModelConnections } from './ModelConnections'; 

export class Visualization extends Component {

render() {
      return <ModelConnections/>
   }
}
