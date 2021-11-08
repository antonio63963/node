const sendPhotoForm = document.forms.sendPhoto;
const wrapperAlbum = document.querySelector('.wrapper-album');

sendPhotoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { data } = await axios.post('/userPanel/sendPhotos', formData);
  if(data) {
    const albumID = document.querySelector('.wrapper-album').dataset.albumid;
    window.location = `/userPanel/album/${albumID}`;
  }
});

wrapperAlbum.addEventListener('click', (e) => {
  if(e.target.classList.contains('replaceIcon')) {
    
  }
  
});

