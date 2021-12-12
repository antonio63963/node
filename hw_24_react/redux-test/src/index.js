import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { reducer } from './reducer.js';
import App from './components/App.js';


const store = createStore(reducer);
console.log(store);
export const { dispatch } = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);



// counter={store.getState()}
// inc={inc}
// dec={dec}
// rnd={()=> rnd(Math.round(Math.random()*10))}


