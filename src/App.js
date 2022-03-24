import './App.css';
import React from 'react';
import Nav from './components/Nav.js';
import Hero from './components/Hero.js';
import Main from './components/Main.js';

const App = () => {

  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Main/>
    </div>
  );
}

export default App;
