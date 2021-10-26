const setToken = (tokenName, token) => {
  const json = JSON.stringify(token);
  localStorage.setItem(tokenName, json);
};

const getToken = (tokenName) => {
  console.log(tokenName);
  const token = localStorage.getItem(tokenName);
  console.log(token);
  return  token ? 
    JSON.parse(token) :
    null;
}

const addToken = (tokenName, token) => {
  if(!getToken(tokenName)) setToken(tokenName, token)
  console.log('token was added!!');
}
