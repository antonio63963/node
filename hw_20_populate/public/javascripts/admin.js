const genreForm = document.forms.genre;
const genreInput = document.querySelector('.addNewGenre');
const genresList = document.querySelectorAll('.genresList');
const addGenreURL = `admin/addGenre`;

const authorsForm = document.forms.authors;
const authorInput = document.querySelector('.authorInput');
const addAuthorURL = `admin/addAuthor`;

genreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = genreInput.value.trim();
  genreInput.value = '';
  if(!name) false;
  const { data } = await axios.post(addGenreURL, {name});
  console.log('data new genre: ', data);
  const newGenre = `
    <li class="list-group-item" data-genre="${data._id}">${data.name}</li>
  `;
 
  genresList.innerHTML += newGenre;
  location.reload();
});

authorsForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = authorInput.value.trim();
  console.log(name);
})
