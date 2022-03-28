import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import './App.css'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">      
        <NavBar />
        <ItemListContainer greeting="Hola Mundo ItemListContainer"/>
      
    </div>
  );
}

export default App;
