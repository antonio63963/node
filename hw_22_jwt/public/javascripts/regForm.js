const regForm = document.forms.reg,
  btnLog = document.querySelector('.btn-login');


regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if(!e.target.classList.contains('submit')) return false;
  const formData = new FormData(e.target);
  const { data } = await axios.post('/regData', formData);
  console.log("REG RESP: ", data);
  if(data.status == 'ok') {
    setTokensToLocal(data.payload.tokens);
    console.log("comp: ", data.component);
    createComponents(data.payload.component);
  }
});

btnLog.addEventListener('click', async (e) => {
  e.stopImmediatePropagation();
  const { data } = await axios.get('/login');
  console.log("btnLogin: ", data);
  createComponents(data.payload.component)
})

