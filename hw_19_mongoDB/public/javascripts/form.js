const create = document.querySelector('.create-article');
const search = document.querySelector('.search-article');
const createArticle = document.forms.article;
const searchArticle = document.forms.search;
const authorInput = document.querySelector('.article_author');
const titleInput = document.querySelector('.article_title');
const searchAuthor = document.querySelector('.search_author');
const searchTitle = document.querySelector('.search_title');
const articleInput = document.querySelector('.article');
const urlCreate = `/form`;
const urlSearch = `form/search`;
const ulArticles = document.querySelector('.articlesList');

// ulArticles.addEventListener('click', (e) => {
//   console.log(e.target); 
//   console.log(e.target.dataset.id); 
//   if(!e.target.classList.contains('articleTitle')) return false;
//   axios.get(`/article/${e.target.dataset.id}`);
// })

create.addEventListener('click', () => {
  create.classList.add('d-none');
  createArticle.classList.remove('d-none');
  searchArticle.classList.add('d-none');
  search.classList.remove('d-none');
});
search.addEventListener('click', () => {
  create.classList.remove('d-none');
  createArticle.classList.add('d-none');
  searchArticle.classList.remove('d-none');
  search.classList.add('d-none');
});

createArticle.addEventListener('submit', async (event) => {
  event.preventDefault();
  const dateCreate = moment().toISOString();
  const formData = {
    author: authorInput.value,
    title: titleInput.value,
    article: articleInput.value,
    dateCreate
  };
  
  const data = await axios.post(urlCreate, formData);
  const formInputs = [...document.querySelectorAll('input, textarea')];
  formInputs.forEach(elem => elem.value = '');

});
searchArticle.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = {
    author: searchAuthor.value,
    title: searchTitle.value
  }
  const data = await axios.post(urlSearch, formData);
  console.log(data);
})
