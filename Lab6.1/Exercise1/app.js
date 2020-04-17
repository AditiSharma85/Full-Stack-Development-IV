var express = require('express');
var app = express();
app.listen(3000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/html', function (req, res) {
  res.send('<html><head></head><body><h1>hello world!</h1></body></html>');
});
app.get('/json', function (req, res) {
  res.json({firsname: 'John', lastname: 'Smith' });
});
app.get('/toronto*team', function (req, res) {
  res.send(`<html><head></head><body><h1>Go Toronto!</h1></body></html>`);
});