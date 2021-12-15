import axios from 'axios';
import { PRODUCT_LOAD_IN_PROGRESS, PRODUCT_LOAD_FAIL, PRODUCT_ADD, GET_PRODUCTS_BY_LIMIT, LOADING } from '../typesAction';




// ifStatusOk
// const ifStatusOk = (result, SUCCESS_TYPE) => {
//   if(result.status !== 200) {
//     return({
//       type: PRODUCT_LOAD_FAIL,

//     })
//   };
//   const action = {
//     type: SUCCESS_TYPE,
//     payload: { data: result.data}
//   };
//   return action;
// }
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


const startLoading = () => {
  return ({
    type: LOADING
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
  dispatch(await actionGetByLimit(limit));
}


export {
  getProductById,
  getProductsByLimit
}