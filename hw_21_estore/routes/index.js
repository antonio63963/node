var express = require('express');
var router = express.Router();
const { getAllLaptops, getOrderName, getOrderPrice } = require('../controllers/cont_laptop');
const { getAllCategories } = require('../controllers/cont_category');
const { getGroupsByCategory } = require('../controllers/cont_group')

/* GET home page. */
router.get('/', async(req, res) => {
  const laptops = await getAllLaptops(10);
  const categories = await getAllCategories();
  res.render('index', { title: 'Express', products: laptops, categories });
});

router.get('/category', async(req, res) => {
  const categories = await getAllCategories();
  res.send(categories);
})

router.post('/group', async(req, res) => {
  const reqData = req.body;
  const groups = await getGroupsByCategory(reqData.id);
  res.send(groups);
});

router.get('/getNameAz', async(req, res) => {
  const laptops = await getOrderName(1);
  const categories = await getAllCategories();
  res.render('index', { title: 'Express', products: laptops, categories });
});

router.get('/getNameZa', async(req, res) => {
  const laptops = await getOrderName();
  const categories = await getAllCategories();
  res.render('index', { title: 'Express', products: laptops, categories });
});

router.get('/getPriceMin', async(req, res) => {
  const laptops = await getOrderPrice(1);
  const categories = await getAllCategories();
  res.render('index', { title: 'Express', products: laptops, categories });
});

router.get('/getPriceMax', async(req, res) => {
  const laptops = await getOrderPrice(-1);
  const categories = await getAllCategories();
  res.render('index', { title: 'Express', products: laptops, categories });
});

module.exports = router;
