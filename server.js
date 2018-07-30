var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webdev-summer-2018');

app.use(session({
 resave: false,
 saveUninitialized: true,
 secret: 'any string'
}));

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/message/:theMessage', (req, res) => {
  var theMessage = req.params['theMessage'];
  res.send(theMessage);
})

app.get('/api/session/set/:name/:value',
setSession);
app.get('/api/session/get/:name',
getSession);
// app.get('/api/session/get',
// getSessionAll);
// app.get('/api/session/reset',
// resetSession);

function setSession(req, res) {
 var name = req.params['name'];
 var value = req.params['value'];
 req.session[name] = value;
 res.send(req.session);
}

function getSession(req, res) {
 var name = req.params['name'];
 var value = req.session[name];
 res.send(value);
}

var userService = require("./services/user.service.server");
userService(app);

app.listen(4000, () => console.log('Example app listening on port 4000!'))
