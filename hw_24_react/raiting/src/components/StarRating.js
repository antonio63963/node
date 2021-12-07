import React from 'react';
import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Star from './Star.js';


const createArray = length => [...Array(length)];

export default function StarRating({ style = {}, totalStars = 5, selectedStars = 0}) {
  console.log(selectedStars)
  return (
    <div style={{padding: "5px", ...style}}>
      {
        createArray(totalStars).map((n, i) => (
          <Star 
            key={i} 
            selected={ selectedStars > i } 
            style={ {backgroundColor: "lightblue"} } 
          />)
        )
      }
      <p>
        {selectedStars} of {totalStars}
      </p>
    </div>
  )
}
// export default function StarRating({style = {}},{ totalStars = 5) {
//   const [ selectedStars, setSelectedStars ] = useState(0)
//   return (
//     <div style={{padding: "5px", ...style}}>
//       {
//         createArray(totalStars).map((n, i) => <Star key={i} selected={ selectedStars > i } 
//         onSelect={()=> setSelectedStars(i + 1)}
//         style={ {backgroundColor: "lightblue"} }     
//       />)
//       }
//       <p>
//         {selectedStars} of {totalStars}
//       </p>
//     </div>
//   )
// }