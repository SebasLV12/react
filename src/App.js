import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import './App.css';

function App() {

  return (
    <>
    <div className="App">
      <header className="App-header">
        <section>


        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre"></label>
        {/* <input type="text" id="nombre"/>
        <h1>{nombre}</h1>
        <p>{auth? "El usuario esta logueado":"el usuario no esta logueado"}
        </p>
        <p>{2+1}</p> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
        <Componente msg="hola soy un comp funcional expresado desde una desde una prop"/>
        <hr/>
        <Propiedades 
        cadena="esto es una cadena de numero" 
        numero={19} 
        booleano={false}
        arreglo={[1,2,3]}
        objeto={{nombre:"jon",correo:"asda@asda.com"}}
        funcion={(num)=>num*num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={<Componente msg="Soy un comp, pasado como prop" />}
        >
        </Propiedades>
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </section>
      </header>
    </div>
    </>
  );
}

export default App;
