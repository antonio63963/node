import { createStore, bindActionCreators } from 'redux';
import { reducer } from './reducer.js';
import * as actions from './actions.js';


const store = createStore(reducer);
const { dispatch } = store;
const { inc, dec, rnd } = bindActionCreators(actions, dispatch)
store.subscribe(() => update())
const update = () => { 
  document.getElementById('counter')
    .innerHTML = store.getState()
}

document.getElementById('inc')
  .addEventListener('click', () => {
    store.dispatch(inc())
  }
)
document.getElementById('dec')
  .addEventListener('click', () => {
    store.dispatch(dec())
  }
)
document.getElementById('rnd')
  .addEventListener('click', () => {
    const payload = Math.floor(Math.random() * 10);
    store.dispatch(rnd(payload))
  }
)




