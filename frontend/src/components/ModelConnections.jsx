import React, { Component } from 'react';
import * as d3 from "d3";
import _ from 'lodash';
import data from './../visualization_data';

const width = 800;
const height = 1000;

export class ModelConnections extends Component {
  constructor(props) {
    super(props)
    this.createSimulation = this.createSimulation.bind(this)
  }

  componentDidMount() {
    this.createSimulation()
  }

  componentDidUpdate() {
    this.createSimulation()
  }

  getNodeColor(node) {
    return node.level === 1 ? 'red' : 'gray'
  }

  createSimulation() {
    this.links = data.links;
    this.nodes = data.nodes.map((node, idx) => {
      node.index = idx;
      return node;
    })
    this.itemCount = _.filter(data.nodes, { 'group': 0 }).length;
    this.groupCount = _.filter(data.nodes, { 'group': 1 }).length;

    console.debug(this.itemCount)
    var svg = d3.select(this.svg);
    var linkForce = d3
      .forceLink()
      .id(function (link) { return link.id })
      .strength(function (link) { return link.strength })

    var simulation = d3
      .forceSimulation()
      .force('link', linkForce)
      .force('charge', d3.forceManyBody().strength(-120))
      .force('center', d3.forceCenter(width / 2, height / 2))

    var linkElements = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(this.links)
      .enter().append("line")
      .attr("stroke-width", 1)
      .attr("stroke", "rgba(50, 50, 50, 0.2)")

    var nodeElements = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.nodes)
      .enter().append("circle")
      .attr("r", 6)
      .attr("fill", this.getNodeColor)

    var textElements = svg.append("g")
      .attr("class", "texts")
      .selectAll("text")
      .data(this.nodes)
      .enter().append("text")
      .text(function (node) { return node.id })
      .attr("font-size", 15)
      .attr("dy", 4) 

    simulation.nodes(this.nodes).on('tick', () => {
      nodeElements
        .attr('cx', (node) => { return node.group === 0 ? 200 : 600 })
        .attr('cy', (node) => { return node.group === 0 ? (height - 50) * node.index / this.itemCount + 25 : (height - 50) * (node.index - this.itemCount) / this.groupCount + 25 })
      textElements
        .attr('x', (node) => { return node.group === 0 ? 200 : 600 })
        .attr('y', (node) => { return node.group === 0 ? (height - 50) * node.index / this.itemCount + 25 : (height - 50) * (node.index - this.itemCount) / this.groupCount + 25 })
        .attr("text-anchor", (node) => { return node.group !== 0 ? "start" : "end" })
        .attr("dx", (node) => { return node.group !== 0 ? 15 : -15 })
      linkElements
        .attr('x1', (link) => { return link.source.group === 0 ? 200 : 600 })
        .attr('y1', (link) => { return link.source.group === 0 ? (height - 50) * link.source.index / this.itemCount + 25 : (height - 50) * (link.source.index - this.itemCount) / this.groupCount + 25 })
        .attr('x2', (link) => { return link.target.group === 0 ? 200 : 600 })
        .attr('y2', (link) => { return link.target.group === 0 ? (height - 50) * link.target.index / this.itemCount + 25 : (height - 50) * (link.target.index - this.itemCount) / this.groupCount + 25 })
    })

    simulation.force("link").links(this.links)

    nodeElements.on('mouseover', function(d) {
      linkElements.style('stroke-width', function(l) {
        if (d === l.source || d === l.target)
          return 2;
        else
          return 1;
        });

      linkElements.style('stroke', function(l) {
          if (d === l.source || d === l.target)
            return "rgba(0, 0, 255, 1)";
          else
            return "rgba(50, 50, 50, 0.2)";
          });
    });

    textElements.on('mouseover', function(d) {
      linkElements.style('stroke-width', function(l) {
        if (d === l.source || d === l.target)
          return 2;
        else
          return 1;
        });

      linkElements.style('stroke', function(l) {
          if (d === l.source || d === l.target)
            return "rgba(0, 0, 255, 1)";
          else
            return "rgba(50, 50, 50, 0.2)";
          });
    });
    
    // Set the stroke width back to normal when mouse leaves the node.
    nodeElements.on('mouseout', function() {
      linkElements.style('stroke-width', 1);
      linkElements.style('stroke', "rgba(50, 50, 50, 0.2)");
    });

    textElements.on('mouseout', function() {
      linkElements.style('stroke-width', 1);
      linkElements.style('stroke', "rgba(50, 50, 50, 0.2)");
    });
  }


  render() {
    return (
      <svg className="mx-auto" ref={node => this.svg = node}
        width={800} height={1000}>
      </svg>
    )
  }
}