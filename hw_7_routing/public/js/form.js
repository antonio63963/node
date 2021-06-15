
const form = document.querySelector('#form');
const inputArr = [...form.querySelectorAll('input')];
const url = 'http://localhost:3333/userData';

const formSubmit = (url) => async (e) => {
  if (e.target.classList.contains('submit')) {
    e.preventDefault();
    const userData = {};
    inputArr.forEach(input => userData[input.className] = input.value);
    console.log(userData);

    axios.post('/userData', userData)
      .then(function (response) {
        console.log(response.status);

      })
      .catch(function (error) {
        console.log(error);
      });
  }
}


form.addEventListener('click', formSubmit(url));


