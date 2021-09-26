const express = require('express');
const router = express.Router();
const { registration } = require('../controllers/jsonSchema/cont_formUser')

router.get('/login', async (req, res) => {
  res.render('login')
});
router.get('/registration', async (req, res) => {
  res.render('registration')
});
// POST
router.post('/regData', registration, async (req, res) => {
  // registration(req, res);
  const userData = req.ip;
  console.log('USERDATA+++++', userData);
});

module.exports = router;