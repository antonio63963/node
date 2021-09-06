const genreInput = document.querySelector('.genre-filter');
const titleInput = document.querySelector('.search_title');
const authorInput = document.querySelector('.search_author');
const form = document.forms.search;
const url = `/form`;
const searchBookList = document.querySelector('.searchBookList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = {
    genre: genreInput.value,
    title: titleInput.value,
    author: authorInput.value,
  }
  const { data } = await axios.post(url, formData);
  console.log(data);
  buildFindBooksList(data);
})

function buildFindBooksList(data) {
  let template;
  data.forEach( book => {
    const {title, author, genre} = book;
    template += `<li class="list-group-item">Title: ${title} Author: ${author.map(aut => aut.name).join(',')} Genre: ${genre.map(gen => gen.name).join(', ')}</li>`;
  });
  searchBookList.innerHTML = template;
}