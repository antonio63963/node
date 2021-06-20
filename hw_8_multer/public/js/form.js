
const url = '/form/req';
const formEl = document.forms.changeFile;
console.log(formEl);

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {data} = await axios.post('/form/req', formData);
  console.log(data);
})