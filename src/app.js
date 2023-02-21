/* eslint-disable radix */
const express = require('express');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: strings.sayHello(req.params.string) });
  // res.sendStatus(200);
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: strings.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: strings.lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.json({ result: strings.firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', async (req, res) => {
  const params = req.params.string.toString();
  const query = parseInt(req.query.length);

  res.status(200).json({ result: strings.firstCharacters(params, query) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) === false || Number.isNaN(b) === false) {
    res.status(200).json({ result: numbers.add(a, b) });
  } else {
    res.status(400);
    res.send('Nan values');
  }
});

app.post('/numbers/multiply', (req, res) => {
  res.status(200).json({ result: numbers.multiply(req.body.a, req.body.b) });
});

module.exports = app;
