import axios from 'axios';
import {
 GET_PAGE,
 LOADING_IN_PROCESS
} from '../actonTypes';


const actionLoading = (id) => {
  return {
    type: LOADING_IN_PROCESS,
    payload: { id }
  }
};

const actionGetPage = async(id) => {
  const {data} = await axios.get(`/api/article/${id}`);
  console.log('data: ', data)
  const newState = {
    type: GET_PAGE,
    payload: data
  }
  console.log('get page', newState);
  return newState;
};

export const getPage = async (id, dispatch) => {
  dispatch(actionLoading(id));
  dispatch(await actionGetPage(id));
};