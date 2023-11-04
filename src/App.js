import React from 'react';
import { Link,  BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
// import Navegador from "./componentes/Navegador";
import Navegador from './Navegador';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
          Learn React 4 life
     
      </header>
      <body>
        <Route>
          <Navegador />
            
        </Route>
        


      </body>
    </div>
  );
}

export default App;
