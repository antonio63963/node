const btnLogin = document.querySelector('.login'),
  btnSignUp = document.querySelector('.signUp');


btnLogin.addEventListener('click', ()=> {
  window.location = '/login';
});
btnSignUp.addEventListener('click', ()=> {
  window.location = '/signUp';
});
// console.log("home is working!!");

