const albumList = document.querySelector('.album-list');
const arrows = albumList.children
const sidebarUserLinks = document.querySelectorAll('.sidebarPanel-list a');
console.log(sidebarUserLinks);
albumList.addEventListener('click', (e) => {
  e.target.closest('li').classList.toggle('hide-details');
  e.target.closest('li')
    .children[0].lastElementChild
    .classList.toggle('rotate180');
});

const newAlbumBtn = document.querySelector('.newAlbumBtn');
newAlbumBtn.addEventListener('click', (e) => {
  // contentBlocks.forEach(block => block.classList.add('hidden'));
  // contentBlocks.find(block => block.classList.contains('createAlbum')).classList.remove('hidden');
  // sidebarUserLinks.forEach((link) => link.classList.remove('active'));
  // [...sidebarUserLinks].find(link => link.dataset.block == 'createAlbum').classList.add('active');
})