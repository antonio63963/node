var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', productVis: true,});
});
router.get('/order', function(req, res, next) {
  res.render('index', { title: 'Order', productVis: false})
})

module.exports = router;
