import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Card from '../components/card.js';
import { getProductsByLimit, getProductById } from '../reducer/actions.js'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import Sprinner from '../components/Sprinner.js';

function App() {
  const [ idNum, setIdNum ] = useState();
  const store = useSelector( state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(store)
    getProductsByLimit(5, dispatch)
  }, []);
  const isLoading = store.arrProductStatus !== 'SUCCESS';

  const onButton = () => {
    getProductById(idNum, dispatch)
  }
console.log(store)
  return (
    <div>
    <Row gutter={16} >
          {isLoading ?
          <Sprinner style={{position: 'absolute', bottom: '50px'}}/> :
          store.products.map(prod =>  (
            <Col key={prod.id} >
              <Card product={prod} />
            </Col>
          ))}
    </Row>
     
    <input type="number" onChange={(e) => setIdNum(e.target.value)} />
    <button onClick={() => onButton()} type="button" >get products</button>
    </div>
  );
}

export default App;
