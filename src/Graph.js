import React, { Component } from 'react';
import Dygraph from 'dygraphs';

 export default class Graph extends Component {
     constructor(props){
        super(props);
         this.name = props.name;
     }
     componentDidMount(){
     	this.dygraph = new Dygraph(document.getElementById(this.name), this.props.data, this.props.options)
     }
 
     render(){
         return(
             <section className="">
                 <div className="" id={ this.name }></div>
             </section>
         );
     }
 }