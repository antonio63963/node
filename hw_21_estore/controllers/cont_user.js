const UserModel = require('../models/user');

const createUser = async (userData) => {
  const user = new UserModel;
  user.name = userData.name;
  user.email = userData.email;
  user.password = userData.password;
  const doc = await user.save();
  console.log(doc._id);
  return doc;
};
const checkUserByEmail = async(data) => {
  const user = await UserModel.find({email: data.email});
  return user;
}; 

const loginUser = async (data) => {
  console.log('MAIL : ', data.email, 'PaSSS: ', data.password);
  const user = await UserModel.findOne({email: data.email, password: data.password});
  console.log(user);
  if(user) {return true}
  else {return false}
};



module.exports = {
  createUser,
  loginUser,
  checkUserByEmail,
};
