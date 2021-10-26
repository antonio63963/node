const setTokensToLocal = (payload) => {
  console.log('PAYLOAD: ', payload);
  const { accessToken, refreshToken } = payload;
  addToken('accessToken', accessToken);
  addToken('refreshToken', refreshToken);
};

const getFreshToken = async () => {
  const accessToken = getToken('accessToken');
  const refreshToken = getToken('refreshToken');
  const { data } = await axios.post('/updateToken', { accessToken, refreshToken });
  if(data.status === 'ok') {
    setTokensToLocal(data.payload)
  }
};
getFreshToken();