const loginForm = document.forms.login;
const btnReg = document.querySelector('.btn-registr');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if(!e.target.classList.contains('submit')) return false;
  const formData = new FormData(e.target);
  const { data } = await axios.post('/loginData', formData);
  console.log(data);
  console.log("log: ", data);
  if(data.status == 'ok') {
    const { tokens, component } = data.payload
    updateTokens(tokens);
    createComponents(component);
    initRefreshToken();
  }
});

btnReg.addEventListener('click', async (e) => {
  e.stopImmediatePropagation();
  console.log(e.target);
  const { data } = await axios.get('/reg');
  console.log("btnGoReg: ", data);
  createComponents(data.payload.component);
});

