const carousel = document.querySelector('#carouselExampleInterval');
const carouselPics = document.querySelectorAll('.pic-carousel');
const wrapperAlbum = document.querySelector('.wrapper-album');


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
    addToStore(photo_id, price);
    const badge = parent.querySelector('.badge-addPhoto');
    badge.textContent = +badge.textContent +1;
  }

});
 


