
import update from 'immutability-helper';
import {
  GET_PAGE,
  LOADING_IN_PROCESS
 } from '../actonTypes';

const initState = {
  articles: [
    // {
    //   id: 0,
    //   title: 'Some title',
    //   text: 'Some text',
    //   status: 'ok'
    // }
  ],
}
const reducer = ( state = initState, action ) => {
  switch (action.type) {
    case LOADING_IN_PROCESS: {
      // check is article exist in store
      const payloadID = action.payload.id;
      console.log('Payload.id: ', payloadID);
      const isExist = state.articles.findIndex(article => article.item.id === payloadID);
      console.log('isExist: ', state.articles);
      if(isExist === -1 ) {
        console.log('isExist: ', isExist, 'length: ', state.articles.length);
        const isPush = state.articles.length === payloadID;
        const article = {
          item: {id: action.payload.id},
          status: 'in_progress'
        };
        return !isPush ? 
          update(state, {
            articles: {$push: [article]}
          }) : update(state, {
            articles: {$unshift: [article]}
          });
      } else { console.log('fuck of!!!'); return state }
    };

    case GET_PAGE : {
      const ind = state.articles.findIndex(article => article.item.id === action.payload.payload.id);
      // console.log('sate: ', state)
      const newState = update(state, {
        articles: {[ind]: {
          $set: {
            item: action.payload.payload, 
            status: action.payload.status
          }
        }
      }
      })
      console.log("newState: ", newState);
      return newState;
    }
    default: 
      return state;
  }

};

export default reducer;
