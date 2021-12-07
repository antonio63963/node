import React, { useState } from 'react';

export default function AddColorForm({ onNewColor = f => f }) {
  const [txtTitle, setTxtTitle] = useState();
  const [hexColor, setHexColor] = useState('#000');

  const submit = e => {
    e.preventDefault();
    onNewColor(txtTitle, hexColor);
    setTxtTitle('');
    setHexColor('');
  }
  return (
    <form onSubmit={submit}>
      <input onChange={(e) => setTxtTitle(e.target.value)} type="text" placeholder="color title..." required /> 
      <input onChange={(e) => setHexColor(e.target.value)} type="color" required />
      <button>ADD</button> 
    </form>
  )
}