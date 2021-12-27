
import update from 'immutability-helper';
import {
  GET_PAGE,
  LOADING_IN_PROCESS,
  SPLICE_ARTICLES
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

      // const artArr = state.articles;
      // console.log('LENGTH: ', state);
      // if(artArr.length >= 3) {
      //   indexConcat < 0 ? artArr.slice(1) : artArr.splice(artArr.length -1, 1);
      // }

      const { indexConcat } = action.payload;
      console.log('load payl0ad: ', action.payload)
      if(state.articles.length === 0 || indexConcat === 1 ) {
        const article = {
          item: {id: null},
          status: 'in_progress'
        };
        const newState = update(state, {
          articles: {$push: [article]}
        });
        console.log('0 || 1: ', newState);
        return newState;
      }

      console.log(indexConcat);
      if(indexConcat === -1) {
         state.articles = [ {
          item: {id: null},
          status: 'in_progress'
        }, ...state.articles ];
        console.log( "-1", state)
        return state;
      }    
    };

    case GET_PAGE : {
      const spliceIndexConcat = (newState, indexConcat) => {
        console.log('in splice function start: ', state)
        const ind = indexConcat < 0 ? state.articles.length - 1 : 0;
        newState.articles.splice(ind, 1);
        console.log("SPLICE: ", newState)
      };


      console.log('action payload: ', action.payload);
      const { item, indexConcat } = action.payload.payload;
      console.log("ITEM: ", item);
      console.log('state', state);
      console.log('state', state.articles.length);
      const ind = indexConcat < 0 ? 0 : state.articles.length - 1;

      console.log('check art ind before: ', state.articles[ind])
      if(item) {
        const newState = update(state, {
          articles: {[ind]: {
            $set: {
              item: action.payload.payload.item, 
              status: action.payload.status
            }
          }
        }
        });
        console.log('state after changes: ', state)
        console.log('check art ind: ', newState.articles[ind])
        if(state.articles.length >=3 ) spliceIndexConcat(newState, indexConcat);
        console.log("newState after splice: ", state);
        return newState;
      } else {
        console.log('======im in pull arr!!!!');
        state.articles.splice(ind, 1)
        console.log('pull arr: ', state)
        return state;
      }
    };

    case SPLICE_ARTICLES: {
      const splaced = state.articles.splice(action.payload, 1);
      console.log("splaced: ", splaced);
      return state;
    };

    default: 
      return state;
  }

};

export default reducer;
