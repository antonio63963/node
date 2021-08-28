const  express = require('express');
const  router = express.Router();
const ArticleModel = require('../models/article');
const db = require('../bin/db')

const pushAuthor = async (userData) => {
  const article = new ArticleModel;
  article.author = userData.author;
  article.title = userData.title;
  article.text = userData.article;
  article.published = userData.dateCreated;
  const doc = await article.save();
  console.log(doc._id);
};
const searchArticle = async (searchData) => {
  const { title, author} = searchData;
  if(title) {
   const res = await ArticleModel.find({title});
   return res;
  };
  if(author) {
    const res = await ArticleModel.find({author})
    return res;
  }
}
/* GET home page. */
router.post('/', (req, res, next) => {
  const data = req.body;
  console.log(typeof req.body);
  pushAuthor(data);
  // res.render('index', { title: 'Express' });
  res.send('status 200');
});
router.post('/search', async (req, res) => {
  const data = req.body;
  console.log(data);
  const dbRequest = await searchArticle(data);
  const idArticle = dbRequest[0]._id;
  // db.articles.updateOne({"_id": idArticle}, {$set: {text: "BLA BLA BLA"}})
  ArticleModel.updateOne({"_id": idArticle}, {$set: {text: "BLA BLA BLA"}})
  console.log(dbRequest);
  res.send(JSON.stringify(dbRequest[0]))
});

module.exports = router;