const express = require('express');
const router = express.Router();
const { getAllCategories } = require('../controllers/cont_category');

/* GET home page. */
router.get('/', async(req, res) => {
  const allCategories = await getAllCategories();
  res.render('admin', {categories: Array.isArray(allCategories) ? allCategories: ['']});
});
// router.get('/categories', async(req, res) => {
//   const allCategories = await getAllCategories();
//   res.render('admin', {categories: Array.isArray(allCategories) ? allCategories: ['']});
// })

module.exports = router;