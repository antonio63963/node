var express = require('express');
var router = express.Router();
const ArticleModel = require('../models/article')

/* GET home page. */
router.get('/', async(req, res, next) => {
  const articlesList = await ArticleModel.find({});
  console.log(articlesList);
  // res.send(JSON.stringify(articlesList));
  res.render('index', { title: 'Express', articlesList });
});

module.exports = router;
