const newPwd = document.forms.newPwd;

newPwd.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target)
  const {data} = await axios.post('/userPanel/newPwd', formData);
  console.log(data);
})