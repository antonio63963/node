


export default function Card({ product }) {
   const {id = 0, title = 'some title', price = 1, image} = product;
console.log(product)
  return (
    <>
    <h1>Helle</h1>
      <span>id: { id }</span>
      <h2>{ title }</h2>
      <p>{ price }</p>
      <img src={ image } alt="product img" />
    </>
  )
}