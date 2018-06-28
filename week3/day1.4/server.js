const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

const names = ['Bob', 'Greg', 'Sally'];

const logger = require('./server/middleware/logger');

console.log(logger);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(function (request, response, next) {
  console.log(next);
  // something went wrong!!!

  next(new Error('Something went wrong!'));
});


app.get('/', function (request, response) {
  console.log('inside index route');
  // console.log(request);

  // response.send(`<h1>Hello Express<h1>`);
  response.render('index');
});

app.post('/process', [function () { }], function (request, response) {
  console.log('body ', request.body);

  names.push(request.body.name);

  response.render('result', {
    name: request.body.name,
    names: names
  });

  // response.redirect('/');
});


app.get('/names/:name', function (request, response) {
  console.log(request.params);

  response.send(names[request.params.name]);
});

app.use(function (error, request, response, next) {
  console.log('handle error? ');

  // log error to db

  console.log(error.message);
  next(error);
});


app.use(function (error, request, response, next) {
  response.send(`An error occurred`);
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));
