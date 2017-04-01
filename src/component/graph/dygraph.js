/**
 * Created by rihdus on 1/4/17.
 */

import React, { Component } from 'react';
import Dygraph from 'dygraphs';
import Graph from './graph';
export default class DygraphPlotter extends Graph {

  constructor() {
    super();
    this.state = {
      data: [],
      config: {}
    };
  }

  render() {
    return (
      <div ref={(el) => this.graphRegion = el}>
        <p>DyGraph</p>
        <p>No data Available</p>
      </div>
    )
  }

  componentDidMount() {
    this.renderGraph(this.graphRegion, this.state.data, this.state.config);
  }

  componentDidUpdate() {
    this.renderGraph(this.graphRegion, this.state.data, this.state.config);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data,
      config: nextProps.config
    }, function () {
      /* State Update complete */
    })
  }

  renderGraph(el, data, graphConfig) {

    /*----------------------*/
    /* Render graph element */
    /* If Data is available */
    /*----------------------*/

    if (data && data.length > 0 && graphConfig) {

      let config = Object.assign({}, graphConfig);

      if(this.$dyDraph) {
        /*----------------------*/
        /* Update Data set only */
        /*----------------------*/
        this.$dyDraph.updateOptions({data: data});
      } else {

        /*---------------------------*/
        /* Initialize dygraph object */
        /*---------------------------*/
        this.$dyDraph = new Dygraph(el, data, config);
      }
    }
  }
}