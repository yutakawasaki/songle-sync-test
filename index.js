
var express = require('express');
var app = express();
app.set('view engine', 'pug');

var x = null;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
  x = 'test(server)';
  next();
});

app.get('/', function (req, res) {
  res.render('index', { "a": x });
});

app.get('/json', function (req, res) {
  res.json({ "b": x });
});

app.listen(process.env.PORT || 8080);
