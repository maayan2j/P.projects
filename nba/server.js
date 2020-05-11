const express = require("express");
/* const urllib = require("urllib"); */
const path = require("path");
const bodyParser = require("body-parser");
const api = require('./server/routes/api')
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api)

const port = 5000;

app.listen(port, function () {
  console.log(`serever is running on port ${port}`);
  

});
