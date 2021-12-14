import axios from 'axios';
import { PRODUCT_LOAD_IN_PROGRESS, PRODUCT_LOAD_FAIL, PRODUCT_ADD, GET_ALL_PRODUCTS } from '../typesAction';


// ifStatusOk
const ifStatusOk = (result) => {
  if(result.status !== 200) {
    return({
      type: PRODUCT_LOAD_FAIL,
      payload: { id }
    })
  };
  const action = {
    type: PRODUCT_ADD,
    payload: { data: result.data}
  };
  return action;
}
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
    type: PRODUCT_ADD,
    payload: { product: result.data}
  };
  // const action = ifStatusOk(result)
  return action;
};

const getProductById = async(id, dispatch) => {
  dispatch(await startLoadProduct(id));
  dispatch(await resultOfLoadById(id));
};

const action = async (limit) => {
  const url = `https://fakestoreapi.com/products?limit=${limit}`;
  const result = await axios.get(url);
  const action = ifStatusOk(result);
  return action;
};




export {
  getProductById
}