import './App.css';
import Formulario from './Formulario';
import React, { useState } from 'react';

function App() {
  const [paso, setPaso] = useState(1);
  return (
    <div className="container">
      <svg className= "fondo-linea" width="600" height="600" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-3.20453 0L524.417 180.548L355.622 673.825L-172 493.277L-3.20453 0Z" fill="#3B8EED"/>
      </svg>
       <div className="botones-debug-para-deleon">
        <button onClick={() => setPaso(paso - 1)}>Anterior</button>
        Paso: {paso}
        <button onClick={() => setPaso(paso + 1)}>Siguiente</button>
      </div>
      {paso === 1 && <>
        <div className="titulos">
          <div className='titulo'>
            <h1> Bien! </h1>
            <h1> Vamos a crear una cuenta </h1>
          </div>
          <div className='subtitulo'>
            <h1> A continuacion completa los siguientes campos con la informacion requerida </h1>
          </div>
        </div>
        <br />
        <div className="contenidos" style={{ textAlign: 'center' }}>
          <Formulario setPaso={setPaso} />
        </div>
      </>}
      {paso === 2 && <>
        proxima pantalla
      </>
      }
    </div>
  );
}

export default App;