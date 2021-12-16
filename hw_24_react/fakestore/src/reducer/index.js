import update from 'immutability-helper';
import { PRODUCT_LOAD_IN_PROGRESS, PRODUCT_LOAD_FAIL, PRODUCT_ADD_BY_ID, GET_PRODUCTS_BY_LIMIT, LOADING} from '../typesAction';
// id: 0,
// title: 'No title',
// price: 0,
// image: `https://pic.onlinewebfonts.com/svg/img_352782.png`

const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {

  const findFilmIdx = (id) => {
    return state.products.findIndex(product => product.id == id);
  };

  switch(action.type) {
    case PRODUCT_LOAD_IN_PROGRESS: {
      const product = {
        id: Number(action.payload.id), status: 'in_progress', 
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

    case PRODUCT_ADD_BY_ID: {
      const ind = findFilmIdx(action.payload.product.id);
      const res = update(state, { products: {[ind]: {
        $set: action.payload.product,
      }}});
      console.log('add : ', ind, res);
      return res;
    };

    case LOADING: {
      return update(state, {$set:{arrProductStatus: action.payload}})
    }
    case GET_PRODUCTS_BY_LIMIT : {

      return update(state, {
        products: {$set: action.payload.data}, 
        arrProductStatus: {$set: 'SUCCESS'}})
    }

    default: 
     return state
  }
};

export default reducer;