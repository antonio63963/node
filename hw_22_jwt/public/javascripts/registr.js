const regForm = document.forms.reg;
// const authCheck = async () => {
//   const token = getToken();
//   console.log(token);
//     if(token) {
//     const { data } = await axios.post('/auth', { token });
//     console.log(data);
//     document.querySelector('body').innerHTML = data;
//   }
// };
// authCheck();

regForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { data } = await axios.post('/regData', formData);
  console.log("REG RESP: ", data);
  if(data.status == 'ok') {
    setTokensToLocal(data.payload.tokens);
    const response = await axios.post('/auth', data.payload);
    console.log("component data: ", response);
    // document.querySelector('body').innerHTML = component;
  }
});

