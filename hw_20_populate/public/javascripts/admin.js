const genreForm = document.forms.genre;
const genreInput = document.querySelector('.addNewGenre');
const genresList = document.querySelectorAll('.genresList');
const addGenreURL = `admin/addGenre`;
// authors
const authorsForm = document.forms.authors;
const authorInput = document.querySelector('.authorInput');
const addAuthorURL = `admin/addAuthor`;
// books
const bookFile = document.querySelector('.book_file');
const booksForm = document.forms.books;
const addBookURL = `admin/addBook`;

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

authorsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = authorInput.value.trim();
  const { data } = await axios.post(addAuthorURL, {name});
  console.log('author: ', data);

})

booksForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData);
  const { data } = await axios.post(addBookURL, formData);
  console.log('book: ', data);

})