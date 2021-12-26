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

  const ind = articlesArr.findIndex( article => article.id === +id)
  console.log('ind: ', ind)
  res.send({
    status: 'ok', 
    payload: 
      ind !== -1 ? articlesArr[ind] : 
      {text: null, id: +id}
  });
})

module.exports = router;
