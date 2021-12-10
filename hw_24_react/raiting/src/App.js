import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';
import colorData from './files/color_data.json';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';
import {v4} from 'uuid';


function App() {
  const [colors, setColors] = useState(colorData)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ColorList 
          colors={colors} 
          onRemoveColor = { id => {
            const newColors = colors.filter( color => color.id !== id );
            setColors(newColors)
          }}
          onRating = { (id, rating) => {
            const newColors = colors.map( color => color.id === id ? {...color, rating} : color );
            setColors(newColors)
          }}
        />
        <AddColorForm 
          onNewColor={
            (title, color) => {
              const newColor = [
                ...colors,
                {
                  id: v4(),
                  rating: 0,
                  title,
                  color
                }
              ];
              setColors(newColor);
            }
          }
        />
      </header>
    </div>
  );
}

export default App;
