const express = require('express');
const router = express.Router();
const { getAllCategories, insertCategory } = require('../controllers/cont_category');
const { insertGroup, getGroupsByCategory, updateSearchName } = require('../controllers/cont_group');
const { insertBrand, getAllBrands, getBrandsByGroup } = require('../controllers/cont_brand');
const { insertLaptop } = require('../controllers/cont_laptop');
//multer
const { uploadArr } = require('../controllers/multer');

/* GET home page. */
router.get('/', async(req, res) => {
  const allCategories = await getAllCategories();
  res.render('admin', {categories: Array.isArray(allCategories) ? allCategories: ['']});
});
router.post('/addCategory', async(req, res) => {
  const reqData = req.body;
  insertCategory(reqData);
  
})
router.post('/addGroup', async(req, res) => {
  const reqData = req.body;
  insertGroup(reqData);
})
router.post('/addBrand', async(req, res) => {
  const reqData = req.body;
  insertBrand(reqData);
})
router.post('/selectCategory', async(req, res) => {
  const reqData = req.body;
  const groups = await getGroupsByCategory(reqData.id_category);
  res.send(groups);
});
router.post('/newLaptop', uploadArr, async(req, res) => {
  const reqData = req.body;
  const file = req.files;
  // const data = await insertLaptop(reqData)
  console.log('reqData: =====',reqData);
  console.log('file:::: =====', file);
});

router.get('/brands/:id', async(req, res) => {
  const { id } = req.params;
  console.log(id);
  const brands = await getAllBrands();
  res.send(brands);
});

router.post('/groupBrands', async(req, res) => {
  const { id } = req.body;
  const brandsByGroup = await getBrandsByGroup(id);
  res.send(brandsByGroup);
})

module.exports = router;