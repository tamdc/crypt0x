import express from "express";
import cors from "cors";
import axios from "axios";
const PORT = 3001;

const app = express();

app.use(cors());
app.get("/api", (req, res) => {
  try {
    axios
      .get(`https://pro-api.coinmarketcap.com/v1/exchange/map`, {
        headers: {
          "X-CMC_PRO_API_KEY": "c3ab96c5-c6ae-4040-8c23-1b50ff311139",
        },
      })
      .then((data) => {
        console.log(data.data);
        res.json({ data: data.data });
      });
  } catch (error) {
    res.json({ data: error });
  }
});

app.listen(PORT, () => {
  console.log(`Backend is running on PORT: ${3001}...`);
});
