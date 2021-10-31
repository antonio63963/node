
const btnSignUp = document.querySelector('.signUp');
const loginForm = document.forms.login;

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const inputsArr = [...document.querySelectorAll('input')];
  const isFull = inputsArr.every(elem => elem.value);
  console.log(isFull);
  if(isFull) {
    const formData = new FormData(e.target);
    console.log(formData);
    const { data } = await axios.post('auth/loginData', formData);
    console.log(data);
  }
  
})
btnSignUp.addEventListener('click', ()=> {
  window.location = '/signUp';
});

