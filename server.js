const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = () => {
  connectDb();
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

server();
