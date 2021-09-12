const genreForm = document.forms.genre;
const genreInput = document.querySelector('.addNewGenre');
const genresList = document.querySelectorAll('.genresList');
const selectGenre = document.querySelector('.selectGenre');
const addGenreURL = `admin/addGenre`;
// authors
const authorsForm = document.forms.authors;
const authorInput = document.querySelector('.authorID');
const searchAuthorList = document.querySelectorAll('.searchAuthor_list');
const searchAuthorBtn = document.querySelector('.searchAuthorBtn')
const addAuthorURL = `admin/addAuthor`;
// books

const bookFile = document.querySelector('.book_file');
const bookTitle = document.querySelector('.titleInput');
const bookDescription = document.querySelector('.descriptionInput');
const bookPic = document.querySelector('.picInput');
const booksForm = document.forms.books;
const bookGenres = document.querySelector('.bookGenres');
const searchAuthorInput = document.querySelector('.searchAuthorInput');
const requestAuthorBook = document.querySelector('.searchAuthor-book_list');
const selectedAuthors = document.querySelector('.author-id');
const searchAuthorURL = `/admin/searchAuthor`;
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

  const newGenreSelect = `
    <option value="${data._id}">${data.name}</option>
  `;
  selectGenre.innerHTML += newGenreSelect;

  location.reload();
});

authorsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = authorInput.value.trim();
  const { data } = await axios.post(addAuthorURL, {name});
  console.log('author: ', data);

})
// BOOKS
booksForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if(!bookPic.value.trim().match(/(.png|.jpg)$/ig)) alert("Please add png or jpg!");
  const formData = {
    title: bookTitle.value.trim(),
    author: [...selectedAuthors.textContent.split(',').slice(0, -1)],
    description: bookDescription.value.trim(),
    genre: [...bookGenres.textContent.split(',').slice(0, -1)],
    pic: bookPic.value.trim(),
  };
  console.log(formData);
  const { data } = await axios.post(addBookURL, formData);
  console.log('book: ', data);

});
// watch for changes in selectGenre
selectGenre.addEventListener('change', async (e) => {
  e.preventDefault();
  bookGenres.textContent += `${e.target.value},`
}); 

// Search the author's id by name

searchAuthorBtn.addEventListener('click', async () => {
  const name = searchAuthorInput.value;
  const { data } = await axios.post(searchAuthorURL, { name });
  let resultList = '';
  data.forEach( author => {
    resultList += `<li class="list-group-item pointer" data-id="${author._id}">${author.name}</li>`
  });
  requestAuthorBook.innerHTML = resultList;
  // location.reload();
});
requestAuthorBook.addEventListener('click', (e) => {
  selectedAuthors.textContent += `${e.target.dataset.id},`;
});

