var express = require('express');
var router = express.Router();
const ArticleModel = require('../models/article');
const db = require('../storages/db');
/* GET users listing. */
router.get('/', async (req, res, next) => {
const changeArt = await ArticleModel.find({title: "BEST OF THE BEST"});
  console.log("TEST: ", changeArt);
  res.send('ok')

});

module.exports = router;
