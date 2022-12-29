import React, { Component } from 'react';

function Hijo (props) {
  return (
  <div>
  <h2>{props.mensaje}</h2>
  <button onClick={props.incrementarContador1}>+</button>
  </div>
  );}

function Hija (props) {
  return (
  <div>
  <h2>{props.mensaje}</h2>
  <button onClick={props.incrementarContador2}>+</button>
  </div>
  );}

function Nieto(props){
  return <h4>{props.mensaje}</h4>;
}

function Nieta(props){
  return<h4>{props.mensaje}</h4>;
}

export default class Padre extends Component{
  state={contador:0,};
  incrementarContador1 =(e)=>{
    this.setState({contador:this.state.contador+1})
  }
  state={contador:0,};
  incrementarContador2 =(e)=>{
    this.setState({contador:this.state.contador+1})
  }
  
  render(){
    return(
      <div>
        <h2>Comunicacion entre Componentes</h2>
        <p><b>{this.state.contador}</b></p>
        <Hijo 
        incrementarContador1={this.incrementarContador1}
        mensaje="Mensaje para el hijo 1" 
        />
        
        <p><b>{this.state.contador}</b></p>
        <Hija 
        incrementarContador2={this.incrementarContador2}
        mensaje="Mensaje para la hija 1"
         />


        <Nieto mensaje="Mensaje para el Nieto 1 de hijo 1" />
        <Nieta mensaje="Mensaje para el Nieto 1 de hija 1" />
      </div>
    )
  }
}
