import React, { useState } from 'react';
import {useInput} from '../hooks';


export default function AddColorForm({ onNewColor = f => f }) {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000');

  const submit = e => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle('');
    resetColor('');
  }
  return (
    <form onSubmit={submit} style={{marginBottom: '100px'}}>
      <input {...titleProps} type="text" placeholder="color title..." required /> 
      <input {...colorProps} type="color" required />
      <button>ADD</button> 
    </form>
  )
}