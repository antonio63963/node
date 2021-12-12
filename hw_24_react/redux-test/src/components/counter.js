import * as actions  from '../actions.js';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {dispatch} from '../index.js'


export default function Counter() {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);


  return (
    <>
      <h2 id="counter">{store}</h2>
      <button onClick={() => inc()} className="btn btn-primary">Inc</button>
      <button onClick={() => dec()} className="btn btn-primary">Dec</button>
      <button onClick={() => rnd(Math.floor(Math.random() * 10))} className="btn btn-primary">RND</button>
    </>
  )
}