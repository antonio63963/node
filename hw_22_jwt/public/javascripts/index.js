const setTokensToLocal = (payload) => {
  console.log('PAYLOAD: ', payload);
  const { accessToken, refreshToken } = payload;
  console.log('SET TOKEN: payload: ', payload);
  if(!accessToken && !refreshToken) {
    console.log('set token to lockal was interrupted');
    return false;
  }
  updateTokens('accessToken', payload);

};

const getFreshToken = async () => {
  const tokens = getTokens();
  const { data } = await axios.post('/updateToken', tokens);
  console.log("REFRESH: ", data);
  if(data.status === 'ok') {
    setTokensToLocal(data.payload)
  }
};

const existTokens = getTokens();
let interval;
if(existTokens && existTokens.accessToken && existTokens.refreshToken) {
  interval = setInterval(() => {
    getFreshToken();
  }, 10000);
}