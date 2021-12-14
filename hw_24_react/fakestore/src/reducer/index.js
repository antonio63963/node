import update from 'immutability-helper';
import { PRODUCT_LOAD_IN_PROGRESS, PRODUCT_LOAD_FAIL, PRODUCT_ADD, GET_ALL_PRODUCTS } from '../typesAction';
// id: 0,
// title: 'No title',
// price: 0,
// image: `https://pic.onlinewebfonts.com/svg/img_352782.png`

const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {
  console.log('action: ', action);
  const findFilmIdx = (id) => {
    return state.products.findIndex(product => product.id === id);
  };

  switch(action.type) {
    case PRODUCT_LOAD_IN_PROGRESS: {
      const product = {
        id: action.payload.id, status: 'in_progress', 
      };
      return update(state, {products: { $push: [product] }});
    };
      
    case PRODUCT_LOAD_FAIL: {
      const ind = findFilmIdx(action.payload.id);
      return update(state, { 
        products: { 
          [ind]: { 
            status: {$set: 'fail'}
          }
        }
      });
    };

    case PRODUCT_ADD: {
      const ind = findFilmIdx(action.payload.id);
      return update(state, { [ind]: {
        status: {$set: 'ok', $set: action.payload}
      }})
    };

    case GET_ALL_PRODUCTS : {
      return update(state, {products: {$each: action.payload}})
    }

    default: 
     return state
  }
};

export default reducer;