import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Article from '../components/Article';
import { getPage, spliceArticles } from '../reducer/actions'

function App() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  
  const handleScroll = (e) => {
    // console.log('height: ', e.target.scrollHeight, "scrollTo0: ", e.target.scrollTop, e.target.clientHeight);
    if(e.target.clientHeight < 5) return false;
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    const top = e.target.scrollHeight - e.target.scrollTop === e.target.scrollHeight;
    if (bottom) { 
      console.log('bottom', bottom); 
      const ind =  store.articles.length - 1;
      const currArticle = store.articles[ind].item.id;
      console.log('currArticle', currArticle)
      // if(store.articles.length >= 3) {
      //   spliceArticles(0, dispatch)
      // };
      getPage(currArticle, 1, dispatch);
    };
    if(top) { 
      console.log('top', top);
      const indCut =  store.articles.length - 1;
      // if(store.articles.length >= 3) {
      //   spliceArticles(indCut, dispatch)
      // };
      const currArticle = store.articles[0].item.id;
      console.log('currArticle', currArticle)
      getPage(currArticle, -1, dispatch);
    }
  }
  // INIT PAGE
  useEffect(() => {
    if(store.articles.length === 0) {
      getPage(null, 0, dispatch);
    // if(store.articles.)
    }
  },[]);
  
  // STORE CHANGE WATCHER
  useEffect(() => {
    console.log('store changed app: ', store)
  }, [store])

  return (
    <div className="App">
      <h1>Война и мир</h1>
      <div className="articleWrapper" onScroll={handleScroll}>

          {
            Array.isArray(store.articles) ?
            store.articles.map(article => (
              <Article article={article} key={article.item.id}/>
            )) :
            console.log("failed store: " ,store)
            // <h1>Not an array!!!</h1>
        }

        </div>
    </div>
  );
}

export default App;
