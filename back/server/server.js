const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const router = require('../routes');
const db = require('../models');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use(express.static('public'))


app.use("/api", router)

//connect database to server
db.sequelizeConnection.sync().then(function() {
	console.log("Listening on port 3000");
  app.listen(3000)
})

module.exports = app; 