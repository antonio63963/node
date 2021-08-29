const  express = require('express');
const  router = express.Router();
const ArticleModel = require('../models/article');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

router.get('/:id', async(req, res) => {
  const { id } = req.params;
  const selectedArticle = await ArticleModel.findById(ObjectId(id));
  const {title, author, text} = selectedArticle;
  res.render('article', {title, author, text}); 
});

module.exports = router;