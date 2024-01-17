import express from "express";
import "dotenv/config";
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
