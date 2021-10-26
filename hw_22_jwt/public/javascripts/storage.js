const setToken = (token) => {
  const json = JSON.stringify(token);
  localStorage.setItem('accessToken', json);
};
const getToken = () => {
  return JSON.parse(localStorage.getItem('accessToken')) || null;
}
const addToken = (token) => {
  console.log('token was catching!!');
  getToken() ? false : setToken(token); 
}
