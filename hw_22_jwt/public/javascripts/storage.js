const setToken = (tokenName, token) => {
  const json = JSON.stringify(token);
  localStorage.setItem(tokenName, json);
};

const getToken = (tokenName) => {
  const token = localStorage.getItem(tokenName);
  return  token ? 
    JSON.parse(token) :
    null;
}

const addToken = (tokenName, token) => {
  if(!getToken(tokenName)) setToken(tokenName, token)
  console.log('token was added!!');
}
