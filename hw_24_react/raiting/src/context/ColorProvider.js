import React, { createContext, useState } from 'react';
import colorData from '../files/color_data.json';
import {v4} from 'uuid';
import  {ColorContext} from '../hooks/colorHooks'

export default function ColorProvider({ children }) {
  const [ colors, setColors ] = useState(colorData);
  // console.log(colors)
  const onNewColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color
      }
    ])
  };
  const onRating = (id, rating) => {
    const newColors = colors.map( color => color.id === id ? {...color, rating} : color );
    setColors(newColors);
  };
  const onRemoveColor =  id => {
    const newColors = colors.filter( color => color.id !== id );
    setColors(newColors)
  }
  return (
    <ColorContext.Provider value={{colors, onNewColor, onRating, onRemoveColor}}>
      { children }
    </ColorContext.Provider>
  )
}