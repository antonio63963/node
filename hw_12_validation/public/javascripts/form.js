const form = document.forms.userData;
const url = `http://localhost:3000/req`;
const us =  {
  id: '1',
  firstName: 'nik',
  lastName: 'freek',
  email: 'freek@mail.com',
  gender: 'male',
  ipAddress: '192.168.5.1'
}
form.addEventListener('submit', async(e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const {data} = await axios.post(url ,us);

  console.log(data);

})