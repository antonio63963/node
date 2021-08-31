const  express = require('express');
const  router = express.Router();
const { findArticleById } = require('../controllers/cont_article')
// const ArticleModel = require('../models/article');
// const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId;

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  console.log('SELETED ARTICLE: ', id);
  const selectedArticle = await findArticleById(id);
  const {title, author, text} = selectedArticle;
  res.render('article', {title, author, text}); 
});

module.exports = router;