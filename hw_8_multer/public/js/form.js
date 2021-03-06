
const url = '/form/req';
const formEl = document.forms.changeFile;
console.log(formEl);

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {data} = await axios.post(url, formData);
  console.log(data);
})