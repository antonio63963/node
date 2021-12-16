import React from 'react';
// import { Image, Button, Space } from 'antd';
import { Card } from 'antd';
import style from './card.module.css'
const { Meta } = Card;


export default function CardProduct({product}) {
  const {id = 0, title = 'some title', price = 1, image, description = 'some description'} = product;
  return (
    <Card
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