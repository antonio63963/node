const CategoryModel = require('../models/category');

const insertCategory = async (userData) => {
  const category = new CategoryModel;
  category.name = userData.name;
  
  const doc = await category.save();
  console.log(doc._id);
  return doc;
};

module.exports = {
  insertCategory,
}