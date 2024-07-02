import express from "express";
import cors from "cors";
import axios from "axios";
const PORT = 3001;

const app = express();
app.use(cors());
app.get("/api", (req, res) => {
  try {
    axios
      .get(`https:/api.coingecko.com/api/v3/ping`, {
        headers: {
          "x-cg-demo-api-key": "c3ab96c5-c6ae-4040-8c23-1b50ff311139",
        },
        data: {
          id: "270",
          slug: "binance",
        },
      })
      .then((data) => {
        console.log(data);
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
