const express = require('express');
const app = express();
const path = require('path');

module.exports = app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../front/views/index.html'))
});