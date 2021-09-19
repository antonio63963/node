var express = require('express');
var router = express.Router();
const { getAllLaptops } = require('../controllers/cont_laptop');
const { getAllCategories } = require('../controllers/cont_category')

/* GET home page. */
router.get('/', async(req, res) => {
  const laptops = await getAllLaptops(10);
  const categories = await getAllCategories();

  res.render('index', { title: 'Express', products: laptops, categories });

});

module.exports = router;
