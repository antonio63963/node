const loginForm = document.forms.login;

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {data} = await axios.post('/form/logData', formData);
 
  if(data.login) {
    window.location = 'http://localhost:3000';
  } else {
    console.log(data.message);
  };
  
});
