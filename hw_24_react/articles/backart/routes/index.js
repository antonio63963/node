var express = require('express');
var router = express.Router();
const articlesArr = require('../articles.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status: 'ok', payload:{Id: 123}});
});
router.post('/article', (req, res) => {
  const { id, indexConcat } = req.body;
  console.log('reQ: ', req.body)
  if(id) {
    const ind =  articlesArr.findIndex( article => article.id === +id);
    const indSearch = ind + indexConcat;
    console.log('ind: ', ind)
    res.send({
      status: 'ok', 
      payload: 
        ind !== -1 ?{item: articlesArr[indSearch], indexConcat} : 
        {item: null, indexConcat}
    });
  }
  else {
    res.send({status: 'ok', payload: {item: articlesArr[0], indexConcat}})
  }
})

module.exports = router;
