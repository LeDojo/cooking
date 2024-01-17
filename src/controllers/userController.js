const { default: User } = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    res.json("User created");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
