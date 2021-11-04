const AlbumModel = require('../models/album');

const createAlbum = async (userData) => {
  const album = new AlbumModel;
  album.name = userData.name;
  album.uid = userData.uid;
  album.tags = userData.tags.split(',');
  album.description = userData.description;
  const doc = await album.save();
  console.log(doc._id);
  return doc;
};

const findAlbumById = async(id) => {
  const album = await AlbumModel.findOne({id});
  return album;
}

module.exports = {
  createAlbum,
  findAlbumById,
};
