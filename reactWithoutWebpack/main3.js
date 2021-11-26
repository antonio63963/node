
function Cat({name}) {
  return (
    <>
      <h1> The cat's nameis {name} </h1>
      <p>He's good`</p>
    </>
  )
};

ReactDOM.render(<Cat name="Jungle" />, document.getElementById('root'));