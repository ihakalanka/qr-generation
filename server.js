const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { dbConnection } = require("./config/dbConnection");
require("dotenv").config();
const router = require('./routes');

const app = express();
const port = parseInt(process.env.PORT);

dbConnection(process.env.MONGODB_URL);

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).json({
      status: 200,
      message: "Welcome to the API"
    });
  });

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
