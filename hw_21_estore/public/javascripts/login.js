const loginForm = document.forms.login;

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {data} = await axios.post('/form/logData', formData);
 
  if(data.login)  document.querySelector('body').innerHTML = data.login;
  //  window.location = 'http://localhost:3000';
  document.addEventListener('DOMContentLoaded', () => {
    console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    const navLi = document.querySelector('.enter');
    navLi.innerHTML = `<a class="nav-link" href="/form/login">Выйти</a>`
  })
});
