const initState = {
  articles: [
    {
      id: 0,
      title: 'Some title',
      text: 'Some text',
      isLoad: false
    }
  ],
}
const reducer = ( state = initState, action ) => {
  switch (action.type) {

    default: 
      return state;
  }

};

export default reducer;
