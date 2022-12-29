import React from 'react';
import Componente from "./components/Componente.jsx";
import Propiedades from "./components/Propiedades.jsx";
import Estado from "./components/Estado.jsx";
import RenderizadoCondicional from "./components/RenderizadoCondicional.jsx";
import RenderizadoElementos from "./components/RenderizadoElementos.jsx";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos.jsx";
import ComunicacionComponentes from "./components/ComunicacionComponentes.jsx"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
      <section>
        <Componente msg="Hello, Hello, I am a express function Component from a prop"/>
      <hr></hr>
        <Propiedades 
        cadena = "This a string"
        numero = {19}
        booleano = {true}
        arreglo ={[2,4,6]}
        funcion = {(num)=>num*num}
        objeto = {{nombre:"Tato", correo:"tatoleon2020@gmail.com"}}
        elementoReact = {<i>Esto es un elemento React</i>}
        componenteReact = {<Componente msg="Soy un componente pasado como Props"/>}
        />
        <hr></hr>
        <Estado/>
        <hr></hr>
        <RenderizadoCondicional/> 
        <hr></hr>
        <RenderizadoElementos/>
        <hr></hr> 
        <EventosES6/>
        <hr></hr>
        <EventosES7/>
        <hr></hr>
        <MasSobreEventos/>
        <hr></hr>
        <ComunicacionComponentes/>
        <hr></hr>

        <hr></hr>

        <hr></hr>    
      </section>
      </header>
      
    </div>
  );
}

export default App;
