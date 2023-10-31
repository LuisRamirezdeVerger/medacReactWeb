import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Navegador from ".Navegador.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 4 life
        </a>
      </header>
      <body>
        <Router>
          <Navegador>
            
          </Navegador>
        </Router>
        


      </body>
    </div>
  );
}

export default App;
