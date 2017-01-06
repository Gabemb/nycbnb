const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const db = require('../models')
const router = require('../routes');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))
app.use('/', router)


// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../../front/views/index.html'))
// })



// database data base to a server
db.sequelizeConnection.sync().then(function() {
	console.log("Listening on port 3000");
  app.listen(3000)
})

module.exports = app; 