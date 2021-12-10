import React from 'react';
import StartRating from './StarRating';
import { FaTrash } from "react-icons/fa";
import { useColors } from '../hooks/colorHooks';

export default function Color({
  id, 
  title, 
  color, 
  rating, 
}) {
  const { onRemoveColor, onRating } = useColors();
  return (
    <section>
      <h1>{title}</h1>
    
        <span 
          onClick={() => onRemoveColor(id)} 
          style={{color: "#fff", cursor: 'pointer'}}
        >
          <FaTrash />
        </span>
  
      <div style={{ height: 50, backgroundColor: color }} />
      <StartRating 
      selectedStars={ rating } 
      onRating={ rating =>  onRating(id, rating) }/>
    </section>
  )
}