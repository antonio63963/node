import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Article from '../components/Article';
import { getPage } from '../reducer/actions'

function App() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if(store.articles.length === 0) {
      getPage(1, dispatch);
      console.log(store.articles)
    }
  },[]);
  useEffect(() => {
    console.log(store.articles)
  }, [store])

  return (
    <div className="App">
      <h1>Война и мир</h1>
      {store.articles.map(article => (
      
        <Article article={article} key={article.id}/>
      ))}
    </div>
  );
}

export default App;
