const form = document.forms.userData;
const url = `http://localhost:3000/form/req`;

form.addEventListener('submit', async(e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {data} = await axios.post(url , formData);
  console.log(data);
})