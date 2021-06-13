
const form = document.querySelector('#form');
const inputArr = [...form.querySelectorAll('input')];
const url = 'http://localhost:3333/userData'
const mainUrl= 'http://localhost:3333/'

const formSubmit = (url) => async (e) => {
  e.preventDefault();
  const userData = {};
  inputArr.forEach(input => userData[input.className] = input.value);
  console.log(userData);

  axios.post('/userData', userData)
  .then(function (response) {
    console.log(response.status);
    axios.get(mainUrl)
    .then(resp => console.log(resp))
  })
  .catch(function (error) {
    console.log(error);
  });
}


form.addEventListener('submit', formSubmit(url));


