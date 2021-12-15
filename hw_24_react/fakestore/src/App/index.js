import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/card.js';
import { getProductsByLimit } from '../reducer/actions.js'

function App() {
  const store = useSelector( state => state);
  const dispatch = useDispatch();
  console.log(store)
  return (
    <div>
      {store.products.map(prod =>  <Card product={prod} />)}
     
      <button onClick={() => getProductsByLimit(5, dispatch)} type="button" >get products</button>
    </div>
  );
}

export default App;
