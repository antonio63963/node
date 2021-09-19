const express = require('express');
const router = express.Router();
const { getAllCategories, insertCategory } = require('../controllers/cont_category');
const { insertGroup, getGroupsByCategory, updateSearchName } = require('../controllers/cont_group');
const { insertBrand, getAllBrands } = require('../controllers/cont_brand');
const { insertLaptop } = require('../controllers/cont_laptop');
const multer = require('multer');
const upload = multer();

/* GET home page. */
router.get('/', async(req, res) => {
  // updateSearchName('6141d146b285ad58fc027887', 'tv');
  // updateSearchName('6141d19cb285ad58fc02788a', 'phone');
  // updateSearchName('6141e1c000fd53896b7f2a76', 'washMachine');
  // updateSearchName('6141f0649443fc4bb8506a57', 'laptop');
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
router.post('/newLaptop', upload.none(), async(req, res) => {
  const reqData = req.body;
  const data = await insertLaptop(reqData)
  console.log(reqData);
});

router.get('/brands/:id', async(req, res) => {
  const { id } = req.params;
  console.log(id);
  const brands = await getAllBrands();
  res.send(brands);
});

module.exports = router;