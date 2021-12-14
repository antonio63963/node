import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/card.js'

function App() {
  const store = useSelector( state => state);
  console.log(store)
  return (
    <div>
      <Card />
      <button type="button" >get products</button>
    </div>
  );
}

export default App;
