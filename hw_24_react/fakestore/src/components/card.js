import React from 'react';
import {useState} from 'react';
// import { Image, Button, Space } from 'antd';
import { Card } from 'antd';
import style from './card.module.css'
const { Meta } = Card;


export default function CardProduct({product}) {
  const {id = 0, title = 'some title', price = 1, image, description = 'some description'} = product;
  const [ isHover, setIsHover ] = useState(false)
  return (
   <div className={style.card}>
      <Card 
        onMouseOver={(e) => {
          // if(e.target.closest.classList.contains())
          setIsHover(true)
        }}
        
        hoverable
        style={{ width: 240 }}
        cover={
        <div className={style.imgWrapper}>
          <img alt="example" className={style.imgCard} src={image} />
        </div>
      }
      >
      <Meta title={ title } />
        ${price}
      </Card>

      <Card 
      onMouseOut={() => setIsHover(false)}
      className={isHover ? style.focussedCard : style.dispNone}
      hoverable
      style={{ width: 240 }}
      cover={
      <div className={style.imgWrapper}>
        <img alt="example" className={style.imgCard} src={image} />
      </div>
    }
    >
      <Meta title={ title } />
      ${price}
      <hr/>
      <p>{description}</p>
    </Card>
   </div>
  
  )
}


// export default function Card({ product }) {
//    const {id = 0, title = 'some title', price = 1, image} = product;
// console.log(product)
//   return (
//     <>
//     <h1>Helle</h1>
//       <span>id: { id }</span>
//       <h2>{ title }</h2>
//       <p>{ price }</p>
//       <img src={ image } alt="product img" />
//     </>
//   )
// }