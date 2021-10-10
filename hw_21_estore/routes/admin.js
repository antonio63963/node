const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllCategories, insertCategory } = require('../controllers/cont_category');
const { insertGroup, getGroupsByCategory, updateSearchName } = require('../controllers/cont_group');
const { insertBrand, getAllBrands, getBrandsByGroup } = require('../controllers/cont_brand');
const { craeteLaptop } = require('../controllers/cont_laptop');
const { promises: Fs} = require('fs');
const productTemplate = require('../components/featuresProd');
const featureValid = require('../middlewares/jsonSchema/check_features')

//multer
const { uploadArr, none } = require('../middlewares/upload');
const multer = require('multer');
const upload = multer();
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
router.post('/newProduct', uploadArr, featureValid, async(req, res) => { //uploadArr
  const reqData = req.body;
  console.log('newProduct request: ', reqData);
  console.log('newProduct request: ', reqData.features);
  // const files = req.files;
  // const dir = path.resolve('public/images/srcFolder');

  // const newName = reqData.model.trim().replace(/[\s/]+/g,"_");
  // console.log('NEW: ######', newName);
  // console.log('reqData: =====',reqData);
  // // console.log('file:::: =====', files);

  // const productPhotoArr = files.map((file, index) => {
  //   const type = file.mimetype.match(/\/(.*)$/i)[1];
  //   const fileName = `${newName}(${index + 1}).${type}`;
  //   Fs.rename(`${dir}/${file.originalname}`, `${dir}/${fileName}`)
  //   .then((err, result) => {err ? console.log('ERROR: ', err) : console.log('RENAME: ',result);});
  //   return `images/srcFolder/${fileName}`;
  // });
  // console.log(productPhotoArr);
  // reqData.img = productPhotoArr;
  // const data = await craeteLaptop(reqData);
 
});

router.post('/prod_temp', async(req, res) => {
  const { id, producttype: product } = req.body;
  console.log('PROD-TEMP', id);
  const brands = await getBrandsByGroup(id);
  const brandList = brands.map(brand => {
    return `
    <option value="${brand._id}">${brand.name}</option>
    `;
  }).join('');
  res.send({status: 'ok', payload: {brandList, productTemplate: productTemplate[product].buildForm()}});
});

router.post('/groupBrands', async(req, res) => {
  const { id } = req.body;
  const brandsByGroup = await getBrandsByGroup(id);
  res.send(brandsByGroup);
})

module.exports = router;