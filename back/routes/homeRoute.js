const express = require('express');
const app = express();
const path = ('path');

module.exports = app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../front/views/index.html'))
});