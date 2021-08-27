const  express = require('express');
const  router = express.Router();
const ArticleModel = require('../models/article');

const pushAuthor = async (userData) => {
  console.log(userData);
  const article = new ArticleModel;
  article.author = userData.author;
  article.title = userData.title;
  article.text = userData.article;
  article.published = userData.dateCreated;
  const doc = await article.save();
  console.log(doc._id);
}
/* GET home page. */
router.post('/', (req, res, next) => {
  const data = req.body;
  console.log(typeof req.body);
  pushAuthor(data);
  // res.render('index', { title: 'Express' });
  res.send('status 200');
});

module.exports = router;