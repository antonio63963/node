const existTokens = getTokens();
let interval;
const auth = async () => {
  if(existTokens && existTokens.accessToken && existTokens.refreshToken) {
    const { data } = await axios.post('/auth', existTokens);
    console.log('start', data);
    document.querySelector('body').innerHTML = data.component;
  }
};
auth();