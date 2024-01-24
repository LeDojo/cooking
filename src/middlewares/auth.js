import jwt from "jsonwebtoken";
import "dotenv/config";
exports.authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "NON-Authorized - token manquant" });
  }
  jwt.verify(token, process.env.JWT_secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "NON-Authorized - Invalid Token"})
    }
  });
};
