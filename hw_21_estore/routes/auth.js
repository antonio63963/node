const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registration, checklogin } = require('../middlewares/jsonSchema/check_formUser');
const { createUser, loginUser, checkUserByEmail } = require('../controllers/cont_user');
const { getAllLaptops } = require('../controllers/cont_product');

router.get('/login', async (req, res) => {
  res.render('login', {noSuchUser: false});
});
router.get('/registration', async (req, res) => {
  res.render('registration')
});
// POST
router.post('/regData', registration, async (req, res) => {
  console.log('PRE S: ', req.session);
  const reqData = req.body;
  const user = await checkUserByEmail(reqData);
  if(!user) {
    const newUser = await createUser(reqData);
    req.session.userId = newUser._id;
    res.send({login: true})
  };
});
router.post('/logData', [upload.none(), checklogin], async (req, res) => {
  const {email, password} = req.body;
  const loginResult = await loginUser(email, password);
  if(loginResult.userID) {
    req.session.userId = loginResult.userID;
  };
  res.send(loginResult);
});

router.get('/logout', async(req, res) => {
  req.session.userId = null;
  const laptops = await getAllLaptops(10);
  const categories = await getAllCategories();
  res.render('index', { title: 'Express', products: laptops, categories, auth: {login: false}});
});

module.exports = router;