const applyTag = document.querySelector('#apply-tag');
const tagInput = document.querySelector('.tagInput');
const tagList = document.querySelector('.tagList');
const albumForm = document.forms.album;
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

albumForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const tagArr = [...tagList.children].map(el => el.textContent.slice(0, el.textContent.length - 1));
  const formData = new FormData(e.target);
  formData.append('tags', tagArr);
  const { data } = await axios.post('/userPanel/newAlbum', formData);
  console.log( data );
  if(data.status === 'ok') {
    const { name, _id: id, uid, description, tags } = data.payload;
    responseDB_album('New album has created!', name, tags, description, uid, id);
  };
});

function responseDB_album(title, name, tags, description, uid, id) {
  const temp = `
  <div class="modal-body pointer rounded bg-success text-white" onclick="this.remove()">
  <div class="d-flex justify-content-between><h5>${title}</h5><span class"text-dark">x</span></div>
  <hr>
  <p>Name: ${name}</p>
  <p>ID: ${id}</p>
  <p>Creator: ${uid}</p>
  <p>${description}</p>
  <hr>
  <p>${tags}</p>
  </div>
  `;
  albumForm.innerHTML += temp;
};

applyTag.addEventListener('click', () => {
  if(!tagInput.value || tagInput.value === '') return false;
  const index = Math.floor(Math.random()*colorClasses.length + 1);
  const pill = `
  <span class="badge m-3 rounded-pill ${colorClasses[index]}">${tagInput.value}<span class="p-2 pointer x">x</span></span>
  `;
  tagList.innerHTML += pill;
  tagInput.value = '';
});

tagList.addEventListener('click', (e) => {
  if(!e.target.classList.contains('x')) return false;
  const delElem = e.target.closest('.badge');
  delElem.remove();
});

