var express = require('express');
var router = express.Router();
const { getAllProducts, getOrderName, getOrderPrice, filterProduct, searchByText } = require('../controllers/cont_product');
const { getAllCategories } = require('../controllers/cont_category');
const { getGroupsByCategory } = require('../controllers/cont_group');
const { getBrandsByGroup } = require('../controllers/cont_brand');
const { findUserById } = require('../controllers/cont_user');
const { addComment } = require('../controllers/cont_comment');
const client_filter = require('../filters/client_filter');
const multer = require('multer');
const upload = multer();

/* GET home page. */
router.get('/', async(req, res) => {
  //auth
  const userID = req.session.userId;
  const user = await findUserById(userID);
  const auth = userID ? {login: true, user}: {login: false};
  const products = await getAllProducts(10);

  const categories = await getAllCategories();
  res.render('index', { title: 'Express', products, categories, auth});
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

router.post('/getFilter', async(req, res) => {
  const { id, type } = req.body;
  const brands = await getBrandsByGroup(id);
  // console.log('BRANDS: ', brands);
  res.send({brands, filter: client_filter[type]});
});
router.post('/filterData', upload.none(), async(req, res) => {
 const filter = req.body;
 const laptops = await filterProduct(filter);
 res.send(laptops);
});

router.post('/recall', async(req, res) => {
  const reqData = req.body;
  const comment = await addComment(reqData);
})
 
router.post('/search', upload.none(), async(req, res) => {
  const searchData = req.body.search;
  const searchResult = await searchByText(searchData);
  console.log(searchResult);
  // searchResult ? res.render('index',)
})


module.exports = router;
