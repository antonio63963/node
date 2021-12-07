import React from 'react';
import StartRating from './StarRating';
import { FaTrash } from "react-icons/fa";

export default function Color({
  id, 
  title, 
  color, 
  rating, 
  onRemove = f => f,
  onRating = f => f 
}) {
  return (
    <section>
      <h1>{title}</h1>
    
        <span 
          onClick={() => onRemove(id)} 
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