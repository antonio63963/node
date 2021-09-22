const GroupModel = require('../models/group');

const insertGroup = async (userData) => {
  const group = new GroupModel;
  group.name = userData.name;
  group.category = userData.category;
  group.searchName = userData.searchName;
  const doc = await group.save();
  console.log(doc._id);
  return doc;
};
const getGroupsByCategory = async (id_category) => {
  const groupsArr = await GroupModel.find({category: id_category}, {_id: 1, name: 1, searchName: 1, type: 1}).sort({name: 1});
  return groupsArr;
};
const updateSearchName = (id, fieldValue) => {
  GroupModel.updateOne({ _id: id}, {$set: {searchName: fieldValue}}, (err, result) => {
    if(result) console.log(result)
    if(err) console.log(err)
  })
}

module.exports = {
  insertGroup,
  getGroupsByCategory,
  updateSearchName
}