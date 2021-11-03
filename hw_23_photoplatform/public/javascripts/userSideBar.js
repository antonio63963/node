const sidebarUser = document.querySelector('.sidebarPanel-list');
const albumForm = document.forms.album;

const sidebarUserLinks = document.querySelectorAll('.sidebarPanel-list .nav-link ');
const applyTag = document.querySelector('#apply-tag');
const tagInput = document.querySelector('.tagInput');
const tagList = document.querySelector('.tagList');
const colorClasses = [
  'bg-primary',
  'bg-secondary',
  'bg-success',
  'bg-danger',
  'bg-warning text-dark',
  'bg-info text-dark',
  'bg-light text-dark',
  'bg-dark'
];

// Create new album
sidebarUser.addEventListener('click', async (e) => {
  albumForm.classList.remove('hidden');
  sidebarUserLinks.forEach((link) => link.classList.remove('active'));
  e.target.classList.add('active');
});
albumForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const { data } = await axios.post('/newAlbum', formData);
});



applyTag.addEventListener('click', () => {
  const index = Math.floor(Math.random()*colorClasses.length + 1);
  const pill = `<div><span class="badge rounded-pill ${colorClasses[index]}">${tagInput.value}<span class="mx-2">x</span></span></div>`;
  tagList.innerHTML += pill;

})