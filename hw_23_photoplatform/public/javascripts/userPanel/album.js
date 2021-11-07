const sendPhotoForm = document.forms.sendPhoto;
const wrapperAlbum = document.querySelector('.wrapper-album');

sendPhotoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { data } = await axios.post('/userPanel/sendPhotos', formData);
  if(data) {
    const albumID = document.querySelector('.wrapper-album').dataset.albumID;
    window.location = `/userPanel/album/${albumID}`;
  }
});

wrapperAlbum.addEventListener('click', (e) => {

  e.target.closest('figure').style["flex-grow"] = '5';
  
});

