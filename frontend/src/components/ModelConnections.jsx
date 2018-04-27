import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

const data = [5, 10, 1, 3];
const size = [500, 500];

export class ModelConnections extends Component {
   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }

   componentDidMount() {
      this.createBarChart()
   }

   componentDidUpdate() {
      this.createBarChart()
   }

   createBarChart() {
      const node = this.node
      const dataMax = max(data)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, size[1]])

   select(node)
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(data)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => (size[1] - yScale(d)))
      .attr('height', d => yScale(d))
      .attr('width', 25)
   }

render() {
      return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
   }
}