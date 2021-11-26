import React from 'react';
import { useState, useEffect } from 'react';
import requestObj from '../apiReq/api.js'

export default function Card({content}) {
  const [ character, setCharacter ] = useState({name: "JACK"});
  const [ count, setCount ] = useState(1);
  // const [ page, setPage ] = useState(content);
  // console.log(page)
  function countIncrease() {
    setCount(count + 1);
    console.log(count)
  }
  console.log(requestObj[`get${content}`])
  useEffect(async() => {
    setCharacter(await requestObj[`get${content}`](count));
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