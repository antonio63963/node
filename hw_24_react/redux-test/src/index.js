import { createStore, bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import { reducer } from './reducer.js';
import * as actions from './actions.js';
import Counter from './components/counter.js';


const store = createStore(reducer);
const { dispatch } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
store.subscribe(() => update())
const update = () => { 
  ReactDOM.render(
    <Counter 
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={()=> rnd(Math.round(Math.random()*10))}
    />, 
    document.getElementById('root')
  );
};
update();




