const formArticle = document.forms.article;
const authorInput = document.querySelector('.article_author');
const titleInput = document.querySelector('.article_title');
const articleInput = document.querySelector('.article');
const url = `/form`;

formArticle.addEventListener('submit', async (event) => {
  event.preventDefault();
  const dateCreate = moment().toISOString();
  console.log(dateCreate);
  const formData = {
    author: authorInput.value,
    title: titleInput.value,
    article: articleInput.value,
    dateCreate
  };
  console.log(formData);
  const data = await axios.post(url, formData);
  console.log(data);
})
