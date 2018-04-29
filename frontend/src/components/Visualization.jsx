import React, { Component } from 'react';

import { ModelConnections } from './ModelConnections'; 

export class Visualization extends Component {

render() {
      return (
        <div>
          <h1>Runescape Visualization</h1>
          <div className="text-center"><ModelConnections/></div>
          <p>The nodes on the left hand side represent Runescape items while 
            the nodes on the right hand side represent Runescape skills. Related
            items and skills are connected by lines. Visualization created 
            using data from runescrape.lol.</p>
        </div>
      )
   }
}
