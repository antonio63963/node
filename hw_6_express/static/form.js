const form = document.querySelector('#form');
const inputArr = [...form.querySelectorAll('input')];
const url = 'http://localhost:8888/userData'

const formSubmit = (url) => async (e) => {
  e.preventDefault();

  const userData = {};
  inputArr.forEach(input => userData[input.className] = input.value);
  console.log(userData);

  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    console.log("Success: ", JSON.stringify(json));
  } catch (err) {
    console.error("ERROR: ", err);
  }
}


form.addEventListener('submit', formSubmit(url));


