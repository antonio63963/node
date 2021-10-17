const setToken = (token) => {
  const json = JSON.stringify(token);
  localStorage.setItem('sessionToken', json);
};
const getToken = () => {
  return JSON.parse(localStorage.getItem('sessionToken')) || null;
}
const addToken = (token) => {
  console.log('token was catching!!');
  getToken() ? false : setToken(token); 
}
