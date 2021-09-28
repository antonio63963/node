const UserModel = require('../models/user');

const createUser = async (userData) => {
  const user = new UserModel;
  user.name = userData.name;
  user.auth.login = userData.email;
  user.auth.pwd = userData.password;
  const doc = await user.save();
  console.log(doc._id);
  return doc;
};
const checkUserByEmail = async(data) => {
  const user = await UserModel.findOne({email: data.email});
  console.log("CHECK USER BY EMAIL", user);
  return user;
}; 
const findUserById = async(id) => {
  const user = await UserModel.findOne({id});
  return user;
}

const loginUser = async (data) => {
  const user = await UserModel.findOne({auth: {email: data.email}});
  if(!user) {
    return {login: false, message: 'unknown user'};
  }else {
    const check = user.checkPwd(data.password);
    return {
      login: check, 
      message: 'login successful', 
      userID: user._id
    };
  }
};



module.exports = {
  createUser,
  loginUser,
  checkUserByEmail,
  findUserById
};
