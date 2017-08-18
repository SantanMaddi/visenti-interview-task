import React, { Component } from 'react';
import './App.css';
import Sjson from './sample-data.json';
import Graph from './Graph.js';
class App extends Component {

constructor(props) {
  super(props);
  this.graph = {
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
  };
}

componentWillMount() {
    // coverting the data into valid format and assigning back
    for(var i=0; i<Sjson.length; i++){
        Sjson[i][0] = new Date(Sjson[i][0]);
    }
    this.graph.data = Sjson;
}

render() {
    return  (
        <div className="App">
             <div className="App-header">
               <h1>Visenti Test - Simple React Dygraph</h1>
 
             </div>
 
             <Graph name="demo-graph" data={ this.graph.data } options={ this.graph.options }/>
            </div>
        )
}
}
export default App;