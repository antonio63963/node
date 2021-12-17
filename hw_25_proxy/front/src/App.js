import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {
  const onClickBtn = async() => {
    console.log('click');
    const { data } = await axios.get('http://localhost:8000/test');
    console.log(data)
   
  }
  // useEffect(() => {
  //   onClickBtn()
  // }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => onClickBtn()}>Click</button>
      </header>
    </div>
  );
}

export default App;
