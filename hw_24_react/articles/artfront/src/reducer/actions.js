import axios from 'axios';
import {
 GET_PAGE,
 LOADING_IN_PROCESS,
 SPLICE_ARTICLES
} from '../actonTypes';


const actionLoading = ( indexConcat) => {
  return {
    type: LOADING_IN_PROCESS,
    payload: { indexConcat }
  }
};

const actionGetPage = async(id, indexConcat) => {
  const {data} = await axios.post(`/api/article`, {indexConcat, id});
  const newState = {
    type: GET_PAGE,
    payload: data
  }
  // console.log('get page', newState);
 
  return newState;
};

 const spliceArticles = (ind, dispatch) => {
  const action = {
    type: SPLICE_ARTICLES,
    payload: ind
  };
  dispatch(action);
};

export const getPage = async (id, indexConcat, dispatch) => {
  dispatch(actionLoading(indexConcat));
  dispatch(await actionGetPage(id, indexConcat));
};

