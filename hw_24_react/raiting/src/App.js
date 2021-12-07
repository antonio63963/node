import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating';
import colorData from './files/color_data.json';
import ColorList from './components/ColorList';


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
      </header>
    </div>
  );
}

export default App;
