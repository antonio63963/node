var express = require('express');
var router = express.Router();

const data = [
  {id: 1212,  name: 'штаны', price: 34, description: 'lorem fsdfasdfa fadfasdfasdf'},
  {id: 154,  name: 'шорты', price: 54, description: 'ываваропррьтинорпимf'},
  {id: 166,  name: 'носки', price: 78, description: 'lorem fsdfasdfa fadfasdfasdf'},
  {id: 13443,  name: 'юбон', price: 990, description: 'фывфывафывафывафывафыва'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/products', (req, res) => {
  res.json({data});
})

module.exports = router;
