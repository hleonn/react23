import React, { Component } from 'react';
import data from "./helpers/data.json";

function ElementoLista(props){
  return( 
    <li>
      <a href={props.el.web} target="_blank">{props.el.name}</a>
    </li>
  );
  }

export default class RenderizadoElementos extends Component{
  constructor(props){
    super(props);
    this.state ={
      seasons:["Spring","Summer","Autumn","Winter"],
    };
  }
  render(){
    //console.log(data);
    return(
      <div>
        <h2>Renderizado Elementos</h2>
        <h2>Estaciones del Año</h2>
        <ol>
        {this.state.seasons.map((el,index)=> 
        (<li key={index}>{el}</li>))} 
        
        </ol>
        <h2>Frameworks Frontend JavaScript</h2>
        <ul>
          {data.frameworks.map((el)=>
          <ElementoLista key={el.id} el={el}/>)}
        </ul>
      </div>
    )
  }
}