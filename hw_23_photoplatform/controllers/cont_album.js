const AlbumModel = require('../models/album');

const createAlbum = async (userData) => {
  const album = new AlbumModel;
  album.name = userData.name;
  album.uid = userData.uid;
  album.tags = userData.tags.split(',');
  album.description = userData.description;
  album.photos = [];
  album.isApprove = true;
  const doc = await album.save();
  console.log(doc._id);
  return doc;
};

const addPhotoToAlbum = async (albumID, photoArr) => {
  const doc = await AlbumModel.updateOne({ id: albumID }, { $push: { photos: { "$each": photoArr } } });
  return doc;
}

const findAlbumById = async(id) => {
  const album = await AlbumModel.findOne({ id });
  return album;
};
const getAlbumNameById = async (id) => {
  const { name } = await AlbumModel.findOne({ id }, { name: 1, _id: 0 });
  return name;
};

const findAllUserAlbums = async(uid) => {
  const albums = await AlbumModel.find({uid});
  return albums;
};

module.exports = {
  createAlbum,
  findAlbumById,
  findAllUserAlbums,
  getAlbumNameById,
  addPhotoToAlbum
};
