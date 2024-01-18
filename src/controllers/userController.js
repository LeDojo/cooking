const { default: User } = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    console.log(newUser.fullname);
    res.json({ message: "User created", newUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.listUsers = async (req, res) => {
  try {
    let users = await User.find();
    res.json(
      users.map((user) => ({
        ...user.toObject(),
        fullname: user.fullname,
      }))
    );
  } catch (error) {
    res.status(500).json(error.message);
  }
};
