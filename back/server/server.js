const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const router = require('../routes');
const db = require('../models');
const Sequelize = require('sequelize');
const session = require('express-session');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static('public'));

app.use("/api", router)
app.use('/login', require('../login-route'));
app.use('/auth', require('../auth-route'));

// app.use(function(req, res, next) {

// res.header('Access-Control-Allow-Credentials', true);
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// res.header("Access-Control-Allow-Origin", "http://localhost");
// res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// next();
// });

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../front/views/index.html'));
});

//connect database to server
db.sequelizeConnection.sync().then(function() {
	console.log("Listening on port 3000");
  app.listen(3000);
});

//using session middleware

app.use(session({
  secret: 'Keyboard Kat',
  resave: true,
  saveUninitialized: true
}));

//

module.exports = app;