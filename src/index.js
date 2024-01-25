import express from "express";
import "dotenv/config";
import cors from "cors";

import mongoose from "mongoose";
import userRouter from "./routes/userRoute";
import subRouter from "./routes/subscriberRoute";

import { seedCourses } from "./seedCourses";
// seedCourses()
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log(`[DATABASE] MongoDB is Connected`);
}

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json("WelcoMuuuuuu");
});

app.use("/users", userRouter);
app.use("/subscribers", subRouter);
app.listen(port, () =>
  console.log(`[SERVER] listening at http://localhost:${port}`)
);
