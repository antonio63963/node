const setTokens = (tokens) => {
  const json = JSON.stringify(tokens);
  localStorage.setItem('tokens', json);
};

const getTokens = () => {
  const tokens = localStorage.getItem('tokens');
  return  tokens ? 
    JSON.parse(tokens) :
    null;
}

const updateTokens = (tokenName, tokens) => {
  if(getTokens()) {
    localStorage.removeItem('tokens');
  }
  setTokens(tokens);
}
