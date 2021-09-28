const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllCategories, insertCategory } = require('../controllers/cont_category');
const { insertGroup, getGroupsByCategory, updateSearchName } = require('../controllers/cont_group');
const { insertBrand, getAllBrands, getBrandsByGroup } = require('../controllers/cont_brand');
const { craeteLaptop } = require('../controllers/cont_laptop');
const { promises: Fs, fs} = require('fs');
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
  const dir = path.resolve('public/images/srcFolder');
  const newName = reqData.model;
  console.log('reqData: =====',reqData);
  console.log('file:::: =====', files);

  const productPhotoArr = files.map((file, index) => {
    const type = file.mimetype.match(/\/(.*)$/i)[1];
    const fileName = `${newName}(${index + 1}).${type}`;
    Fs.rename(`${dir}/${file.originalname}`, `${dir}/${fileName}`);
    console.log('productPhoto');
    return `./images/srcFolder/${fileName}`;
  });
  // reqData.img = productPhotoArr;

  // const data = await craeteLaptop(reqData);
 
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