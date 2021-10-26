const getFreshToken = async () => {
  const accessToken = getToken('accessToken');
  const refreshToken = getToken('refreshToken');

    if(refreshToken && accessToken) {
    const { data } = await axios.post('/getFreshToken', { accessToken, refreshToken });
    console.log('get fresh: ', data);
    document.querySelector('body').innerHTML = data;
  }
};
// getFreshToken();