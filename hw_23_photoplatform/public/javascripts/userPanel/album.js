const samePrice = document.querySelector('.samePrice');
const diffPrice = document.querySelector('.diffPrice');
const sendPhotoForm = document.forms.sendPhoto;
const wrapperAlbum = document.querySelector('.wrapper-album');
const replacePhotoInp = document.querySelector('#replacePhoto');
const photoContainer = document.querySelector('.photo-container');
const copyLink = document.querySelector('.copyLink');
const link = document.querySelector('#copyLink');
const currencyAlbum = document.querySelector('.currencyAlbum');
const priceBlock = document.querySelector('.priceBlock');
const photosInput = sendPhotoForm.querySelector('#photosInput');
const priceConfirmBtn = document.querySelector('.confirmPriceBtn');
const header = document.querySelector('.header-content');
// edit details
const changeTitleInput = header.querySelector('.changeTitleInput');
const titleContent = header.querySelector('.title-content');
const descriptionContent = header.querySelector('.descriptionContent');
const changeDescriptionInput = header.querySelector('.changeDescriptionInput');
const changeEventInput = header.querySelector('.changeEventInput');
const eventDate = header.querySelector('#eventDate');


// edit details

const toggleHide = (hideElem, showElem) => {
  console.log(hideElem, showElem);
  hideElem.classList.add('hidden');
  showElem.classList.remove('hidden');
}
const onInputChange = (editElem) => (e) => {
  editElem.textContent = e.currentTarget.value;
  toggleHide(e.currentTarget, editElem);
  e.currentTarget.removeEventListener('change', onInputChange);
}
const onKeyEnter = (hideElem, showElem) => (e) => {
  // console.log(e.code)
  if(e.code === 'Enter' || e.code === 'Escape') {
    toggleHide(hideElem, showElem);
    e.currentTarget.removeEventListener('keydown', onKeyEnter)
  };
};

const onClickToChange = (toChangeElem, fromChangeElement) => {
  toChangeElem.value = fromChangeElement.textContent;
  toggleHide(fromChangeElement, toChangeElem);
};

// const onWindowClick = (existingValueElem, input) => (e) => {
//   console.log('Its window!!!');
//   if(e.target !== input) {
//     toggleHide(input, existingValueElem);
//     e.currentTarget.removeEventListener('click', onWindowClick);
//   }
//   return false;
// };

const onEditParam = (existingValueElem, input) => {
  // window.addEventListener('click', onWindowClick(existingValueElem, input));
  onClickToChange(input, existingValueElem);
  input.addEventListener('change', onInputChange(existingValueElem));
  input.addEventListener('keydown', onKeyEnter(input, existingValueElem));
  return { existingValueElem, input }
};


let toggleElems = null;
header.addEventListener('click', (e) => {
  if(e.target.matches('.iconChangeTitle')) {
    toggleElems = onEditParam(titleContent, changeTitleInput);
    console.log(toggleElems);
  } else if (e.target.matches('.iconChangeDescription')) {
    toggleElems = onEditParam(descriptionContent, changeDescriptionInput);
  } else if (e.target.matches('.iconChangeEvent')) {
    toggleElems = onEditParam(eventDate, changeEventInput);
  } else {
    if(toggleElems) {
      toggleHide(toggleElems.input, toggleElems.existingValueElem);
      toggleElems = null;
    } else {
      false;
    }
  }
});

// =====================================================


copyLink.addEventListener('click', () => {
  navigator.clipboard.writeText(link.textContent);
  const saveLink = link.textContent;
  link.textContent = `Link was saved to buffer`;
  setTimeout(() => link.textContent = saveLink, 2000)
});


sendPhotoForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  priceBlock.classList.add('hidden');
  const formData = new FormData(e.target);
  // const currency = currencyAlbum.value;
  // if (currency !== currencyAlbum.dataset.currency) {
  //   formData.append('currency', currency);
  // };

  const { data } = await axios.post('/userPanel/editAlbum', formData);
  if (data.status === 'ok') {
    const albumID = document.querySelector('.wrapper-album').dataset.albumid;
    window.location = `/userPanel/album/${albumID}`;
  }
});

const getDataAndReload = async (url, formData) => {
  const {
    data
  } = await axios.post(url, formData);
  if (!data.status == 'ok') {
    console.log('Replace photo: ', data);
  } else {
    window.location.reload();
  };
};

const onFileInput = async (formData) => {
  formData.append('photoReplace', replacePhotoInp.files[0], 'photo');
  getDataAndReload('/userPanel/replacePhoto', formData);
  replacePhotoInp.removeEventListener('change', onFileInput);
};
const catchUserDataFromAlbum = (e) => {
  const {
    uid
  } = document.querySelector('.wrapper-album').dataset;
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
};

photoContainer.addEventListener('click', async (e) => {
  e.stopPropagation()
  if (e.target.classList.contains('replaceIcon')) {
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
});

diffPrice.addEventListener('click', (e) => {
  document.querySelector('#price').value = 0;
});

photosInput.addEventListener('change', (e) => {
  priceBlock.classList.remove('hidden');
});