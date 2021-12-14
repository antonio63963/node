


export default function Card({id = 0, title = 'some title', price = 1}) {
   
  return (
    <>
      <span>id: { id }</span>
      <h2>{ title }</h2>
      <p>{ price }</p>
      <img src="{ image }" alt="product img" />
    </>
  )
}