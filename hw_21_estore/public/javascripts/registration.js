const loginForm = document.forms.registration;
const btnClose = document.querySelector('.btn-close');
const sessionCheck = loginForm.elements['session'];

sessionCheck.addEventListener('click', (e) => {
  if(!e.target.hasAttribute('data-session')){
    e.target.setAttribute('data-session', true)
  } else {
    e.target.removeAttribute('data-session');
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputPass1 = loginForm.elements['password'].value;
  const inputPass2 = loginForm.elements['password-repeat'].value;
  const userName = loginForm.elements['userName'].value.trim();
  const userEmail = loginForm.elements['userEmail'].value.trim();
  const session = loginForm.elements['session'].dataset.session;

  // validation
  const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  if(inputPass1 !== inputPass2) { 
    alert('Ошибка в пароле!');
    return false;
  };
  if(!emailRegex.test(userEmail)) {
    alert('ввидите правильный email');
    return false;
  };
  if(!userName) {
    alert('Введите имя');
    return false;
  };
  
  const formData = {
    name: userName,
    email: userEmail,
    password: inputPass1,
    session
  };
  const { data } = await axios.post('/form/regData', formData);
  console.log(data);
});
