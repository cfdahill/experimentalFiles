var password = require('./security.js');
var connection = require('./config/connection.js');
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var connection = require("./config/connection.js");

connection.query("SELECT * FROM userlogin", function(err, data) {
    if (err) {
        console.log("error in server.js, making connection: " + err);
    }
  console.log(data);  
})

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });