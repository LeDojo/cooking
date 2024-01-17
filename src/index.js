import express from "express";
import "dotenv/config";

import mongoose from "mongoose";
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Cooks_db");
  console.log(`[DATABASE] MongoDB is Connected`);
}

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json("WelcoMuuuuuu");
});

app.listen(port, () =>
  console.log(`[SERVER] listening at http://localhost:${port}`)
);
