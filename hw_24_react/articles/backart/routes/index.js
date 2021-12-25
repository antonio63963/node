var express = require('express');
var router = express.Router();
const articlesArr = require('../articles.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status: 'ok', payload:{Id: 123}});
});
router.get('/article/:id', (req, res) => {
  const {id} = req.params;
  console.log('id: ', id)

  res.send({status: 'ok', payload: articlesArr[id - 1]})
})

module.exports = router;
