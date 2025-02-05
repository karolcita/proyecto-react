import React from 'react';
import { useState } from 'react';
import './App.css';

import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import ContadorHooks from './components/ContadorHooks';

function App() {
  let nombre = "Francisco";
  let login = false;
  let equipos =["Colombia", "Brasil", "Argentina", "Uruguay"];
  

  return (
    <>
      <div className='App'>
        {/* <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre"></input>
        <h1>{nombre}</h1>
        <p>{login ? "Está logueado": "No está logueado" } </p>
        <ul>
          {equipos.map((equipo,index)=>(<li key = {index}>{equipo}</li>))}
        </ul> */}
        <div>
          {/* <Componente msj="Hola soy un componente Funcional"/>
          <Propiedades 
          cadena='Prop Cadena' 
          numero={23} 
          booleano={true} 
          arreglo={[1,2,3]}
          objeto={{nombre:"Dario", apellido:"Gómez"}}
          elementoReact =  {<i>Elemento de React</i> }
          componenteReact = { <Componente msj = 'soy un componente pasado por propiedad' /> }
          /> */}

          <ContadorHooks/>

        </div>
        
      </div>
      
    </>
  )
}

export default App
