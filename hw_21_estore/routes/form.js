const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) => {
  res.render('login')
});
router.get('/registration', async (req, res) => {
  res.render('registration')
});
// POST
router.post('/regData', async (req, res) => {
  const userData = req.body;
  console.log('USERDATA+++++', userData);
});

module.exports = router;