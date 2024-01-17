import express from "express";
import "dotenv/config";

import mongoose from "mongoose";
import userRouter from "./routes/userRoute";
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`[DATABASE] MongoDB is Connected`);
}

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json("WelcoMuuuuuu");
});

app.use("/users", userRouter);
app.listen(port, () =>
  console.log(`[SERVER] listening at http://localhost:${port}`)
);
