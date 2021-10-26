const loginForm = document.forms.login;
const authCheck = async () => {
  const token = getToken();
  console.log(token);
    if(token) {
    const { data } = await axios.post('/auth', { token });
    console.log(data);
    document.querySelector('body').innerHTML = data;
  }
};
authCheck();

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { data } = await axios.post('/loginData', formData);
  console.log(data);
  if(data.status == 'ok') {
    const res = addToken(data.payload.token);
    console.log('RES ', res);
  }
});

