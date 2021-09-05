const GenreModel = require('../models/genre');

const pushGenre = async (userData) => {
  const genre = new GenreModel;
  genre.name = userData.name;
  const doc = await genre.save();
  console.log( 'new genre: ', doc._id);
};

module.exports = {
  pushGenre
}