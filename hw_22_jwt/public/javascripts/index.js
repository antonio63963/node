const formTest = document.forms.test;

formTest.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target.value);
  const { data } = await axios.post('/login', formData);
  console.log(data);
})