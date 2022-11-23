const express = require('express');

const app = express();

const items = [
  { id: 1, name: 'item1' },
  { id: 2, name: 'item2' },
];

// defining the middleware
const middleware1 = (req, res, next) => {
  console.log('doing stuff in middleware 1');
  next();
};

const middleware2 = (req, res, next) => {
  console.log('doing stuff in middleware 2');
  next();
};

// linking the middleware to the express app
app.get('/myroute', middleware1, middleware2, (req, res) => {
  console.log('handling /myroute');
  res.send('content for /myroute');
});

app.get('/hello', middleware2, (req, res) => {
  console.log('handling /hello');
  res.send(`Hello ${req.query.name} !`);
});

app.get('/things', (req, res) => {
  console.log('handling GET /things');
  res.send(items);
});

module.exports.app = app;
