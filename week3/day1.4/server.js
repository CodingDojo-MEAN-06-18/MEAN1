const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

const names = ['Bob', 'Greg', 'Sally'];


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (request, response) {
  console.log('inside index route');
  // console.log(request);

  // response.send(`<h1>Hello Express<h1>`);
  response.render('index');
});

app.post('/process', function (request, response) {
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

app.listen(port, () => console.log(`Express server listening on port ${port}`));
