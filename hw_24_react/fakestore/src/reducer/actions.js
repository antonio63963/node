import axios from 'axios';
import { PRODUCT_LOAD_IN_PROGRESS, PRODUCT_LOAD_FAIL, PRODUCT_ADD_BY_ID, GET_PRODUCTS_BY_LIMIT, LOADING } from '../typesAction';


// ACTIONS
const startLoadProduct = async(id) => {
  return ({ 
    type: PRODUCT_LOAD_IN_PROGRESS,
    payload: { id }
  })
};

const resultOfLoadById = async(id) => {
  const url = `https://fakestoreapi.com/products/${ id }`;
  const result = await axios.get(url);

  if(result.status !== 200) {
    return({
      type: PRODUCT_LOAD_FAIL,
      payload: { id }
    })
  };
  const action = {
    type: PRODUCT_ADD_BY_ID,
    payload: { product: result.data}
  };
  // const action = ifStatusOk(result)
  return action;
};

const getProductById = async(id, dispatch) => {
  dispatch(await startLoadProduct(id));
  dispatch(await resultOfLoadById(id));
};


const startLoading = () => {
  return ({
    type: LOADING,
    arrProductStatus: LOADING
  })
}
const actionGetByLimit = async (limit) => {
  const url = `https://fakestoreapi.com/products?limit=${limit}`;
  const result = await axios.get(url);
  if(result.status !== 200) {
    return({
      type: PRODUCT_LOAD_FAIL, 
    })
  };
  const action = {
    type: GET_PRODUCTS_BY_LIMIT,
    payload: { data: result.data}
  };
  return action;
};

const getProductsByLimit = async(limit, dispatch) => {
  // dispatch(startLoading());
  dispatch(await actionGetByLimit(limit));
}



export {
  getProductById,
  getProductsByLimit
}