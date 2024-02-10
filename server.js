const express = require("express");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());
app.use("/api/finance-tracker", require("./routes/transactionsRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);

const server = () => {
  connectDb();
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

server();
