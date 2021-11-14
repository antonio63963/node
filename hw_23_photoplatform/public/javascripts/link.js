const carousel = document.querySelector('#carouselExampleInterval');
const carouselPics = document.querySelectorAll('.pic-carousel');
const wrapperAlbum = document.querySelector('.wrapper-album');
const headerContent = document.querySelector('.right-content');
const storeInfo = document.querySelector('.right-content');
const storeCont = document.querySelector('.store')
const storeList = document.querySelector('.storeList');
const badgePhotoHeader = document.querySelector('.badgePhotoHeader');

badgePhotoHeader.textContent = getStore().reduce((acc, item) => {
  acc += item.amount;
  return acc;
}, 0);

wrapperAlbum.addEventListener('click', (e) => {
  // console.log('e.target: ', e.target);
  if(e.target.matches('.album-img')) {
    console.log('wow');
    const imgSrc = e.target.src;
    const { photo_id } = e.target.dataset;
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgFullSize');
    const img = document.createElement('img');
    img.setAttribute('src', imgSrc);
    img.setAttribute('data-photo_id', photo_id);
    // img.classList
    imgDiv.appendChild(img);
    document.querySelector('.photo-container').appendChild(imgDiv);
    // e.target.closest('figure').appendChild(imgDiv);
    return;
  };
  if(e.target.closest('.imgFullSize')) {
    console.log('remove');
    e.target.closest('.imgFullSize').remove();
    return;
  };
  if(e.target.closest('.addPhotoBtn')) {
    const parent = e.target.closest('.addPhotoBtn');
    const { price, photo_id} = parent.dataset;
    const src = e.target.closest('figure').querySelector('img').getAttribute('src'); 
    addToStore(photo_id, price, src);
    const badge = parent.querySelector('.badge-addPhoto');
    badge.textContent = +badge.textContent +1;
    const headerBadge = headerContent.querySelector('.badge-addPhoto');
    headerBadge.textContent = +headerBadge.textContent +1;
  }
});
 
storeInfo.addEventListener('click', (e) => {
  e.stopPropagation();
  const store = getStore();
  console.log(store)
  const storeItems = store.map(item => {
    return `
      <li class="list-group-item d-flex align-items-center">
        <img src="${item.src}" style="width: 50px" class="mx-3">
        <span>amount: ${ item.amount } </span>
        <span>price: ${ item.price } $</span>
        <span class="itemSum">sum: ${ item.price * item.amount } $ </span>
      </li>
    `;
    
  });
  console.log(storeItems)
  storeList.innerHTML = storeItems.join('');
  storeCont.classList.remove('hidden')
});


storeCont.addEventListener('click', async (e) => {
  if(e.target.matches('#get-invoice')) {
    const store = getStore();
    const orderArr = store.reduce((acc, item) => {
      acc.push({ photoID: item.id, amount: item.amount, price: item.price });
      return acc;
    }, []);
    const {album_id: albumID, uid} = e.currentTarget.dataset;
    e.currentTarget.classList.add('hidden');
    const { data } = await axios.post('/order/sendOrder', {albumID, photographer: uid, photos: orderArr});
    console.log(data);
    if(data.status === 'ok') {
      const { orderID } = data.payload;
      window.location = `/order/confirmOrder/${orderID}`;
    }else {
      alert('Sorry, Smth has gone wrong!');
    }
    return;
  };
  if(e.currentTarget) {
    e.currentTarget.classList.toggle('hidden');
  }
});




