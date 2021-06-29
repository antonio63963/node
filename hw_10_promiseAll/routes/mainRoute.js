const express = require('express');
const router = express.Router();

const title = ` <h1> Введите id планет </h1>`;


router.get('/', (req, res) => {
  res.render('form', {content: title});
});


module.exports = router;