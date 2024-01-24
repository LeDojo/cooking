const { default: User } = require("../models/userModel");
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import "dotenv/config";

const createUser = async (req, res) => {
  try {
    let newUser = await User.create(req.body);
    console.log(newUser.fullname);
    res.json({ message: "User created", newUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const listUsers = async (req, res) => {
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
// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       const token = jwt.sign({email: user.email}, process.env.JWT_secret)
//       res.json({token})
//     }else {
//       res.status(401).json({error:" Vos identifiants sont invalides"})
//     }
//   } catch (error) {
//     res.status(500).json({error: 'Hello from the other side'})
//   }
// };

export default { createUser, listUsers };
