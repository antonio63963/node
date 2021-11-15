const samePrice = document.querySelector('.samePrice');
const sendPhotoForm = document.forms.sendPhoto;
const wrapperAlbum = document.querySelector('.wrapper-album');
const replacePhotoInp = document.querySelector('#replacePhoto');
const photoContainer = document.querySelector('.photo-container');
const copyLink = document.querySelector('.copyLink');
const link = document.querySelector('#copyLink');

copyLink.addEventListener('click', () => {
  navigator.clipboard.writeText(link.textContent);
  const saveLink = link.textContent;
  link.textContent = `Link was saved to buffer`;
  setTimeout(() =>link.textContent = saveLink, 2000)
})


sendPhotoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const price = document.querySelector('#price').value;
  console.log(price)
  formData.append('price', price);

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
    console.log('photoID: ', photoID, 'photoSrc: ', photoSrc, 'albumID: ', albumID, 'price: ', price);
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
    console.log('delIcon');
    const formData = catchUserDataFromAlbum(e);
    await getDataAndReload('/userPanel/deletePhoto', formData)
    return;
  }
});

samePrice.addEventListener('click', (e) => {
  console.log('btn');
  const priceInp = document.querySelector('.priceInp');
  priceInp.classList.remove('hidden');
})
