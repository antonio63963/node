var express = require('express');
var router = express.Router();
const url = 'https://fakestoreapi.com/products';
const axios = require('axios');


/* GET home page. */
router.get('/products', async(req, res, next) => {
  console.log('in the product route')
  const {data} = await axios.get(`${url}?limit=10`);
  console.log(data);
  res.send({status: 'ok', payload: data});
});

module.exports = router;
