const express = require('express');
const router = express.Router();

/* GET home page. */
const title = ` <h1> Введите id планет </h1>`;


router.get('/', (req, res) => {
  res.render('form', {content: title});
});

module.exports = router;
