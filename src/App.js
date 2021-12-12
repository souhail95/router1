import React from 'react';
import Data from './data';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom' 


function App() {
  return (
    <Router  basename="/router1" >
    <div>
       <header  className="box9"></header>
       <Data/>
       <footer className="box10" ></footer>
    </div>
    </Router>
  );
}

export default App;
