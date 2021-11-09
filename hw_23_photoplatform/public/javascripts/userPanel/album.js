const sendPhotoForm = document.forms.sendPhoto;
const wrapperAlbum = document.querySelector('.wrapper-album');
const replacePhotoInp = document.querySelector('#replacePhoto');
const photoContainer = document.querySelector('.photo-container');

console.log(replacePhotoInp);
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

  
});

const onFileInput = async (formData) => {
  formData.append('photoReplace', replacePhotoInp.files[0], 'photo');
  const { data } = await axios.post('/userPanel/replacePhoto', formData);
  if(!data.status == 'ok' ) {
    console.log('Replace photo: ', data);
  }else {
    window.location.reload();
  }
};


photoContainer.addEventListener('click', (e) => {
  e.stopPropagation()
  if(e.target.classList.contains('replaceIcon')){
    const { uid } = document.querySelector('.wrapper-album').dataset;
    const photoID = e.target.closest('label').dataset.photo_id;
    const photoSrc = e.target.closest('figure').lastElementChild.getAttribute('src');
    const albumID = e.target.closest('figure').dataset.album_id;
    console.log("photoID: ", photoID, 'SRC: ', photoSrc);
    const formData = new FormData();
    formData.append('photoID', photoID);
    formData.append('photoSrc', photoSrc);
    formData.append('albumID', albumID);
    formData.append('uid', uid);
    console.log('Target: ', e.target);
    
    replacePhotoInp.addEventListener('change', async () => onFileInput(formData))
  }
});
