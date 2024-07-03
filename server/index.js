import express from "express";
import cors from "cors";
import axios from "axios";
const PORT = 3001;

const app = express();
app.use(cors());
app.get("/api/exchanges", (req, res) => {
  try {
    axios
      .get(`https:/api.coingecko.com/api/v3/exchanges`, {
        headers: {
          "x-cg-demo-api-key": "CG-FJhnGRYLLqUPbfE5WBPkRcdW",
          accept: "application/json",
        },
      })
      .then((data) => {
        res.json({ data: data.data });
      });
  } catch (error) {
    console.log(error);
    // res.json({ data: error });
  }
});

app.listen(PORT, () => {
  console.log(`Backend is running on PORT: ${3001}...`);
});
