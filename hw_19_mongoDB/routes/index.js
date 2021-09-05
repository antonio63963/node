var express = require('express');
const db = require('../storages/db');
var router = express.Router();
const ArticleModel = require('../models/article');



/* GET home page. */
router.get('/', async(req, res, next) => {
  const articlesList = await ArticleModel.find({});
  console.log(articlesList);
 
  res.render('index', { title: 'Express', articlesList });
});

module.exports = router;
