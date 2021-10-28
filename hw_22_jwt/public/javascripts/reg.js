const logout = document.querySelector('.logout');

logout.addEventListener('click', async () => {
  console.log("LOGOUT");
  const existTokens = getTokens();
  const { data } = await axios.post('/logout', existTokens);
  localStorage.removeItem('tokens');
  console.log(data);
});