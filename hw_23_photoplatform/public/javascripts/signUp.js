const signUpForm = document.forms.signUp;
const btnLogin = document.querySelector('.login');


signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const inputsArr = [...document.querySelectorAll('input')];
  const isFull = inputsArr.every(elem => elem.value);
  const pwd1 = document.querySelector('.pwd1');
  const pwd2 = document.querySelector('.pwd2');
  const isPwd = pwd1 === pwd2;
  if(isFull && isPwd) {
    const formData = new FormData(e.target);
    const { data } = await axios.post('auth/signUpData', formData);
    console.log(data);
  }
  
})

  


btnLogin.addEventListener('click', ()=> {
  window.location = '/login';
});
