const logout = document.querySelector('.logout');

logout.addEventListener('click', async () => {
  console.log("LOGOUT");
  console.log('Timer id reg: ', timerId);
  const existTokens = getTokens();
  const { data } = axios.post('/logout', existTokens);
  // localStorage.removeItem('tokens');
  localStorage.removeItem('tokens');
  window.location = '/';
  console.log('aftrer removing: ', localStorage.getItem('tokens'));
  clearInterval(timerId);
  console.log("Remove: ", getTokens());
  console.log(data);
});