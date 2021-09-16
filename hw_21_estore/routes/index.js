var express = require('express');
var router = express.Router();
const { getAllLaptops } = require('../controllers/cont_laptop');

/* GET home page. */
router.get('/', async(req, res) => {
  const laptops = await getAllLaptops(10);
  res.render('index', { title: 'Express', products: laptops });
});

module.exports = router;
