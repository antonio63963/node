const create = document.querySelector('.create-article');
const search = document.querySelector('.search-article');
const formArticle = document.forms.article;
const searchArticle = document.forms.article;
const authorInput = document.querySelector('.article_author');
const titleInput = document.querySelector('.article_title');
const articleInput = document.querySelector('.article');
const url = `/form`;


create.addEventListener('click', () => {
  create.classList.add('d-none');
  formArticle.classList.remove('d-none');
  searchArticle.classList.add('d-none');
  search.classList.remove('d-none');
});
search.addEventListener('click', () => {
  create.classList.remove('d-none');
  formArticle.classList.add('d-none');
  searchArticle.classList.remove('d-none');
  search.classList.add('d-none');
});

formArticle.addEventListener('submit', async (event) => {
  event.preventDefault();
  const dateCreate = moment().toISOString();
  const formData = {
    author: authorInput.value,
    title: titleInput.value,
    article: articleInput.value,
    dateCreate
  };
  
  const data = await axios.post(url, formData);
  const formInputs = [...document.querySelectorAll('input, textarea')];
  formInputs.forEach(elem => elem.value = '');

})
