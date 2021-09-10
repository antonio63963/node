const mongoose = require('mongoose');
const AuthorModel = require('../models/author');

const pushAuthor = async (userData) => {
  const author = new AuthorModel;
  author.name = userData.name;
  const doc = await author.save();
  console.log(doc._id);
  return doc;
};

module.exports = {
  pushAuthor
}