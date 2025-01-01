const userModel = require("../models/userModel");

module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !password || !email) {
    throw new Error("All feildes are required");
  }
  const user = userModel.create({
    fullname: { firstname, lastname },
    email,
    password,
  });
  return user;
};
