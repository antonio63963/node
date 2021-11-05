const photosInput = document.getElementById('photosInput');
const sendPhotos = document.querySelector('.sendPhotos');

sendPhotos.addEventListener('click', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { data } = await axios.post('/userPanel/sendPhotos', formData);
})