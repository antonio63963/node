


const form = document.querySelector('#form');
const inputArr = [...form.querySelectorAll('input')];
const url = 'http://localhost:8888/userData'

const formSubmit = (url) => async (e) => {
  e.preventDefault();
  console.log('send is run');
  const userData = {};
  inputArr.forEach(input => userData[input.className] = input.value);
  console.log(JSON.stringify(userData));

  axios.post('/userData', userData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


form.addEventListener('submit', formSubmit(url));


