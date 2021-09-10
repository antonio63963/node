const express = require('express');
const router = express.Router();
const { pushGenre, getAllGenres } = require('../controllers/genre');

router.get('/', async(req, res) => {
  const genres = await getAllGenres();
  // console.log('All GENRES: ', genres);
  res.render('admin', {genres: genres});
});

module.exports = router;