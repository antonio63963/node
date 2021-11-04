const albumList = document.querySelector('.album-list');
const arrows = albumList.children
console.log(arrows);
albumList.addEventListener('click', (e) => {
  e.target.closest('li').classList.toggle('hide-details');
  e.target.closest('li')
    .children[0].lastElementChild
    .classList.toggle('rotate180');
})