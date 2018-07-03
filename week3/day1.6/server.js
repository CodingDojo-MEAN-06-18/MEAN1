const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();
const logger = require('./server/middleware/logger');
// console.log('logger is ' + logger);

const names = ['Bob', "Sally", 'Homer'];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static'), {
  index: false
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
app.use(function (request, response, next) {
  console.log(next);
  // next(new Error('Whoops! Something went wrong!!!'));
  next();
});

app.use(doSomething({ extended: false }));

function doSomething(state) {
  console.log('our state => ' + state);

  return function (request, response, next) {
    console.log('inside our state middleware => ' + state);

    if (state.extended) {
      // do something if true ,
    } else {
      // do something if false
    }


    next();
  };
}

app.get('/', function (request, response) {
  console.log('index route');

  response.render('index');
});

// app.post('/', function () { });
app.post('/process', function (request, response) {
  console.log(request.body);

  names.push(request.body.name);

  response.render('result', { name: request.body.name, names: names });

  // response.redirect('/');
});

app.get('/names/:index', function (request, response) {
  console.log(request.params);
  response.send(names[parseInt(request.params.index, 10)]);
});

app.use(function (error, request, response, next) {
  console.log('handling error? ');

  // log the error
  console.log(`logging error to db:: ${error.message}`);

  next(error);
});

app.use(function (error, request, response, next) {
  response.send(error.message);
});


app.listen(port, () => console.log(`Express server listening on port ${port}`));
