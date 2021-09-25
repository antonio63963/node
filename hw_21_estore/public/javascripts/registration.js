const loginForm = document.forms.registration;
const btnClose = document.querySelector('.btn-close');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputPass1 = loginForm.elements['password'].value;
  const inputPass2 = loginForm.elements['password-repeat'].value;
  const userName = loginForm.elements['userName'].value.trim();
  const userEmail = loginForm.elements['userEmail'].value.trim();
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
    password: inputPass1
  };
  const { data } = await axios.post('/form/regData', formData);
  console.log(data);
});
