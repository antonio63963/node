const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const { registration, login } = require('../controllers/jsonSchema/cont_formUser');
const { createUser, loginUser, checkUserByEmail } = require('../controllers/cont_user');

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
router.post('/logData', [upload.none(), login], async (req, res) => {
  const userData = req.body;
  const loginResult = await loginUser(userData);
  if(loginResult.userID) session.userId = loginResult.userID;
  console.log('SESSION#######',req.session);
  res.send(loginResult);
});

module.exports = router;