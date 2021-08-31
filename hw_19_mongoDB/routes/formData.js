const  express = require('express');
const  router = express.Router();
const { searchArticle, pushAuthor } = require('../controllers/cont_article');


/* GET home page. */
router.post('/', (req, res, next) => {
  const data = req.body;
  console.log(data);
  pushAuthor(data);
  // res.render('index', { title: 'Express' });
  res.send('status 200');
});
router.post('/search', async (req, res) => {
  const data = req.body;
  console.log(data);
  const dbRequest = await searchArticle(data);
  console.log(dbRequest);
  res.send(JSON.stringify(dbRequest[0]))
});

module.exports = router;