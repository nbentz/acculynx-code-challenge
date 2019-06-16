require("./config/config");

const express = require("express");
const bodyParser = require("body-parser");
const questionRoute = require('./routes/questions');

let { mongoose } = require("./db/mongoose");

let app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

//sets CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//api calls
app.use('/questions', questionRoute);
//finish setup
app.listen(port, () => {
  console.log(`Started on port ${port}.`);
});

module.exports = {app};
