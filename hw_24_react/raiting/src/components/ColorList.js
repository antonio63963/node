import React, { useContext, createContext} from 'react';
import Color from './Color';
import {useColors} from '../hooks/colorHooks';





export default function ColorList() {

  console.log(useColors())
  const { colors } = useColors();
  if(!colors.length) return <div>No Colors Listed</div>;
  return (
    <div>
      {
        colors.map(color => <Color 
          key={color.id} 
          {...color} 
          // onRemove={onRemoveColor}
          // onRating={onRating}
        />)
      }
    </div>
  )
}
// WITHOUT CONTEXT
// export default function ColorList({ 
//   colors = [], 
//   onRemoveColor = f => f,
//   onRating = f => f 
// }) {

//   if(!colors.length) return <div>No Colors Listed</div>;
//   return (
//     <div>
//       {
//         colors.map(color => <Color 
//           key={color.id} 
//           {...color} 
//           onRemove={onRemoveColor} 
//           onRating={onRating}
//         />)
//       }
//     </div>
//   )
// }