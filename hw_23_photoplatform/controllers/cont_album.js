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
  const doc = await AlbumModel.updateOne({ _id: albumID }, 
    { $push: { photos: { "$each": photoArr } } });
  return doc;
}

const findAlbumById = async(uid, id) => {
  const album = await AlbumModel.findOne({uid, _id: id });
  return album;
};
const findAlbumForLink = async( albumID ) => {
  const album = await AlbumModel.findOne({ _id: albumID })
    .populate('uid');
  const { name, role, _id: id } = album.uid;
  delete album.uid;
  album.author = { name, role, id }
  return album;
}
const getAlbumNameById = async (id) => {
  const { name } = await AlbumModel.findOne({ id }, { name: 1, _id: 0 });
  return name;
};

const findAllUserAlbums = async(uid) => {
  const albums = await AlbumModel.find({uid});
  return albums;
};

const replacePhotoWhithOtherOne = async (albumID, replaceID, newLink) => {
  const doc = await AlbumModel.findOneAndUpdate(
    { _id: albumID }, 
    { $set: { "photos.$[elem].link": newLink }},
    {arrayFilters: [ { "elem._id": replaceID } ] }
  );  
  return doc;
};

const deletePhoto = async (albumID, photoID) => {
  const doc = await AlbumModel.findOneAndUpdate(
    { _id: albumID}, 
    { $pull: { photos: {_id: photoID} }},
    { new: true });
  return doc;
}

module.exports = {
  createAlbum,
  findAlbumById,
  findAllUserAlbums,
  getAlbumNameById,
  addPhotoToAlbum,
  replacePhotoWhithOtherOne,
  deletePhoto,
  findAlbumForLink
};
