const sendPhotoForm = document.forms.sendPhoto;
const wrapperAlbum = document.querySelector('.wrapper-album');
const replacePhotoInp = document.querySelector('#replacePhoto');
const photoContainer = document.querySelector('.photo-container');


sendPhotoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { data } = await axios.post('/userPanel/sendPhotos', formData);
  if(data) {
    const albumID = document.querySelector('.wrapper-album').dataset.albumid;
    window.location = `/userPanel/album/${albumID}`;
  }
});

const getDataAndReload = async (url, formData) => {
  const { data } = await axios.post(url, formData);
  if(!data.status == 'ok' ) {
    console.log('Replace photo: ', data);
  }else {
    window.location.reload();
  };
}

const onFileInput = async (formData) => {
  formData.append('photoReplace', replacePhotoInp.files[0], 'photo');
  getDataAndReload('/userPanel/replacePhoto', formData);
  replacePhotoInp.removeEventListener('change', onFileInput);
};
const catchUserDataFromAlbum = (e) => {
  const { uid } = document.querySelector('.wrapper-album').dataset;
    const photoID = e.target.closest('label').dataset.photo_id;
    const photoSrc = e.target.closest('figure').lastElementChild.getAttribute('src');
    const albumID = e.target.closest('figure').dataset.album_id;
    const formData = new FormData();
    formData.append('photoID', photoID);
    formData.append('photoSrc', photoSrc);
    formData.append('albumID', albumID);
    formData.append('uid', uid);
    return formData;
}

photoContainer.addEventListener('click', async (e) => {
  e.stopPropagation()
  if(e.target.classList.contains('replaceIcon')) {
    const formData = catchUserDataFromAlbum(e);
    replacePhotoInp.addEventListener('change', async () => onFileInput(formData));
    return;
  }
  if (e.target.classList.contains('delIcon')) {
    const formData = catchUserDataFromAlbum(e);
    getDataAndReload('/deletePhoto', formData)
    return;
  }
});
