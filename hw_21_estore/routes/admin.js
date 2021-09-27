const express = require('express');
const router = express.Router();
const { getAllCategories, insertCategory } = require('../controllers/cont_category');
const { insertGroup, getGroupsByCategory, updateSearchName } = require('../controllers/cont_group');
const { insertBrand, getAllBrands, getBrandsByGroup } = require('../controllers/cont_brand');
const { craeteLaptop } = require('../controllers/cont_laptop');
const { promises: Fs} = require('fs');
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
  const files = req.files;
  const dir = './public/images';
  const newName = reqData.model;
  files.forEach((file, index) => {
    Fs.rename(`${dir}/${file.originalname}`, `${dir}/${newName}(${index + 1})`);

  })
  // const data = await craeteLaptop(reqData)
  console.log('reqData: =====',reqData);
  console.log('file:::: =====', files);
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