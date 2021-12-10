import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';
import colorData from './files/color_data.json';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';
import ColorProvider from './context/ColorProvider';
import {v4} from 'uuid';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ColorProvider>
        <ColorList />
        <AddColorForm />
      </ColorProvider>    
       
      </header>
    </div>
  );
}

export default App;
