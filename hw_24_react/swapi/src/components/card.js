import React from 'react';
import { useState, useEffect } from 'react';
import requestFunction from '../apiReq/api.js'

export default function Card() {
  const [ character, setCharacter ] = useState({name: "JACK"});
  const [ count, setCount ] = useState(1)
  function countIncrease() {
    setCount(count + 1);
    console.log(count)
  }
  useEffect(async() => {

    setCharacter(await requestFunction(count));
    console.log(character)

  }, [count]);
  return (
    <div>
      <img src={ character.img } alt="character" />
      <h3>{ character.name }</h3>
      <button onClick={() => setCount(count + 1)}>next</button>
    </div>
  )
}