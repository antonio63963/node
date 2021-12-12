
export default function Counter({ counter, inc, dec, rnd }) {
  return (
    <>
      <h2 id="counter">{ counter }</h2>
      <button onClick={() => inc()} className="btn btn-primary">Inc</button>
      <button onClick={() => dec()} className="btn btn-primary">Dec</button>
      <button onClick={() => rnd()} className="btn btn-primary">RND</button>
    </>
  )
}