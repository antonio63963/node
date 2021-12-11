import {combineReducers} from 'redux';
import filmsReducer from './films.js';

export default function createReducer(injectReducers = {}) {
  const rootReducer = combineReducers({
    films: filmsReducer,
  });

  return rootReducer;
}