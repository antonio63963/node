const btnRegistr = document.querySelector('.btn-registr'),
  btnLogin = document.querySelector('.btn-login'),
  existTokens = getTokens();
let interval;
const auth = async () => {
  if(existTokens && existTokens.accessToken && existTokens.refreshToken) {
    const { data } = await axios.post('/auth', existTokens);
    console.log('start', data);
    createComponents(data.component)
  }
};
auth();
// events
btnRegistr.addEventListener('click', async () => {
  getLink('reg')
});
btnLogin.addEventListener('click', async () => {
  getLink('login')
});

