import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Article from '../components/Article';
import { getPage } from '../reducer/actions'

function App() {
  const [ currentInd, setCurrentInd ] = useState(null);
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  
  const handleScroll = (e) => {
    console.log('height: ', e.target.scrollHeight, "scrollTo0: ", e.target.scrollTop, e.target.clientHeight);
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const top = e.target.scrollHeight - e.target.scrollTop === e.target.scrollHeight;
    if (bottom) { 
      console.log('bottom', bottom); 
      const ind =  store.articles.length - 1;
      const currArticle = store.articles[ind].item.id;
      getPage(currArticle + 1, dispatch);
    };
    if(top) { console.log('top', top); }
  }
  // INIT PAGE
  useEffect(() => {
    if(store.articles.length === 0) {
      getPage(1, dispatch);
    // if(store.articles.)
    }
  },[]);
  
  // STORE CHANGE WATCHER
  useEffect(() => {
    setCurrentInd()
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
