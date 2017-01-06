const express = require('express');
const app = express();

module.exports = app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../front/views/index.html'))
});