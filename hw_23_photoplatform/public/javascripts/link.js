const carousel = document.querySelector('#carouselExampleInterval');
const carouselPics = document.querySelectorAll('.pic-carousel');
const wrapperAlbum = document.querySelector('.wrapper-album');

// wrapperAlbum.addEventListener('click', (e) => {
//   if(e.target.matches('img')) {
//     const { photo_id } = e.target.dataset;
//     carouselPics.forEach(pic => {
//       console.log(pic.dataset.photo_id);
//       if(pic.dataset.photo_id === photo_id) {
//         pic.classList.add('active');
//       }
//     })

//   }
// })

// wrapperAlbum.addEventListener('click', (e) => {
//   if(e.target.matches('.album-img')) {
//     console.log('wow');
//     const imgSrc = e.target.src;
//     const { photo_id } = e.target.dataset;
//     const imgDiv = document.createElement('div');
//     imgDiv.classList.add('imgFullSize');
//     const img = document.createElement('img');
//     img.setAttribute('src', imgSrc);
//     img.setAttribute('data-photo_id', photo_id);
//     // img.classList
//     imgDiv.appendChild(img);
//     document.querySelector('.photo-container').appendChild(imgDiv);
//     // e.target.closest('figure').appendChild(imgDiv);
//   }
//   if(e.target.closest('.imgFullSize')) {
//     console.log('remove');
//     e.target.closest('.imgFullSize').remove();
//   }
// })