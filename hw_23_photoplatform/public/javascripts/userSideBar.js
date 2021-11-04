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
const tagArr = [];

// Create new album
sidebarUser.addEventListener('click', async (e) => {
  albumForm.classList.remove('hidden');
  sidebarUserLinks.forEach((link) => link.classList.remove('active'));
  e.target.classList.add('active');
});
albumForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const tagArr = [...tagList.children].map(el => el.textContent.slice(0, el.textContent.length - 1));
  console.log(tagArr);
  const formData = new FormData(e.target);
  formData.append('tags', tagArr);
  const { data } = await axios.post('userPanel/newAlbum', formData);
  console.log( data );
});



applyTag.addEventListener('click', () => {
  const index = Math.floor(Math.random()*colorClasses.length + 1);
  const pill = `<span class="badge m-3 rounded-pill ${colorClasses[index]}">${tagInput.value}<span class="p-2 pointer x">x</span></span>`;
  tagList.innerHTML += pill;
  tagInput.value = '';
});

tagList.addEventListener('click', (e) => {
  console.log('xxxxx');
  if(!e.target.classList.contains('x')) return false;
  const delElem = e.target.closest('.badge');
  delElem.remove();
});