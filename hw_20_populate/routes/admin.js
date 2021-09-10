const express = require('express');
const router = express.Router();
const { pushGenre, getAllGenres } = require('../controllers/genre');

router.get('/', async(req, res) => {
  const genres = await getAllGenres();
  // console.log('All GENRES: ', genres);
  res.render('admin', {genres: genres});
});
router.post('/addGenre', async (req, res) => {
  const data = req.body;
  console.log('FROM front: ', data);
  const doc = await pushGenre(data);
  console.log('new genre doc: ', doc);
  res.send(doc);

})

module.exports = router;