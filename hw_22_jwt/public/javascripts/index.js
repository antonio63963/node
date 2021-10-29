const setTokensToLocal = (payload) => {
  // console.log('PAYLOAD: ', payload);
  const { accessToken, refreshToken } = payload;
  // console.log('SET TOKEN: payload: ', payload);
  if(!accessToken && !refreshToken) {
    console.log('set token to lockal was interrupted');
    return false;
  }
  updateTokens(payload);

};

const getFreshToken = async () => {
  const tokens = getTokens();
  const { accessToken, refreshToken } = tokens;
  console.log('getFresh: ', tokens);
  if(!accessToken && !refreshToken) {
    console.log('not enough tokens');
    return false;
  } else {
    const { data } = await axios.post('/updateToken', tokens);
    console.log("REFRESH: ", data);
    if(data.status === 'ok') {
      setTokensToLocal(data.payload)
    }
    return true;
  };
};

let timerId;
function initRefreshToken() {
  const existTokens = getTokens();
  if(existTokens && existTokens.accessToken && existTokens.refreshToken) {
    timerId = setInterval(async() => {
      const status = await getFreshToken();
      console.log("status fresh: ", status);
      if(!status) {
        clearInterval(timerId);
        console.log('CLEAR');
      }
    }, 5000);
    console.log('Timer id: ', timerId);
  };
};

const createComponents = (component) => {
  const { html, scripts } = component;
  const body = document.querySelector('body');
  const container = document.querySelector('.container');
  const oldScripts = document.querySelectorAll('script');
  oldScripts.forEach(script => script.remove());
  container.innerHTML = html;
  scripts.forEach(script => {
    const elem = document.createElement('script');
    elem.src = script;
    body.appendChild(elem)
  });   
};

async function getLink(link) {
  const { data } = await axios.get(`/${link}`);
  console.log(`${link}: `, data);
  createComponents(data.payload.component)
}