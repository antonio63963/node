const setTokensToLocal = (payload) => {
  console.log('PAYLOAD: ', payload);
  const { accessToken, refreshToken } = payload;
  console.log('SET TOKEN: payload: ', payload);
  if(!accessToken && !refreshToken) {
    console.log('set token to lockal was interrupted');
    return false;
  }
  addToken('accessToken', accessToken);
  addToken('refreshToken', refreshToken);
};

const getFreshToken = async () => {
  const accessToken = getToken('accessToken');
  const refreshToken = getToken('refreshToken');
  const { data } = await axios.post('/updateToken', { accessToken, refreshToken });
  console.log("REFRESH: ", data);
  if(data.status === 'ok') {
    setTokensToLocal(data.payload)
  }
};

const accessToken = getToken('accessToken');
const refreshToken = getToken('refreshToken');
let interval;
if(accessToken && refreshToken) {
  interval = setInterval(() => {
    getFreshToken();
  }, 10000);
}