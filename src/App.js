import React, { Component } from 'react';
import './App.css';
import data from './sample-data.js';
import Graph from './Graph.jsx';

class App extends Component {
    graph = {
        data: [],
        options: {
            "title": "Pressure Transient(s)",
            "xlabel": "Time",
            "ylabel": "Pressure (meters)",
            "gridLineWidth": 0.1,
            "labels": ["Date", "Tampines Ave10 (Stn 40)"],
            "connectSeparatedPoints": true,
            "axes": {
                "x": { "axisLabelFontSize": 9 }
            },
            "animatedZooms": true
        }
    }

    componentWillMount() {
      this.graph.data = data();
    }

    render() {

        return (
          <div className="App">
            <div className="App-header">
              <h1>Visenti Test - Simple React Dygraph</h1>

            </div>

            <Graph name="graph-1" data={ this.graph.data } options={ this.graph.options }/>
        </div>
        );
    }
}

export default App;
