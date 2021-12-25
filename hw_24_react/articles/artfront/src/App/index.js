import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Article from '../components/Article';
import { getPage } from '../reducer/actions'

function App() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  
  const handleScroll = (e) => {
    console.log('height: ', e.target.clientHeight);
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
      console.log('bottom', bottom); 
      getPage(2, dispatch)
    }
  }
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
      <div className="articleWrapper" onScroll={handleScroll}>

          {store.articles.map(article => (
            <Article article={article} key={article.item.id}/>
          ))}
          
        </div>
    </div>
  );
}

export default App;
