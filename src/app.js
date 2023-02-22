/* eslint-disable radix */
const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
  // res.sendStatus(200);
});

app.get('/strings/upper/:string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', async (req, res) => {
  const params = req.params.string.toString();
  const query = parseInt(req.query.length);

  if (Object.keys(req.query).length === 0) {
    res.json({ result: firstCharacter(req.params.string) });
  } else {
    res.status(200).json({ result: firstCharacters(params, query) });
  }
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) === false || Number.isNaN(b) === false) {
    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:b/from/:a', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (Number.isNaN(a) === false || Number.isNaN(b) === false) {
    res.status(200).json({ result: subtract(a, b) });
  } else {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (Number.isNaN(a) === false || Number.isNaN(b) === false) {
    res.status(200).json({ result: multiply(a, b) });
  }

  if (!req.body.b || !req.body.a) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(a) === true && Number.isNaN(b) === true) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (Number.isNaN(a) === false && Number.isNaN(b) === false && b !== 0) {
    res.status(200).json({ result: divide(a, b) });
  }
  if (req.body.b === 0) {
    res.status(400);
    res.send({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.b || !req.body.a) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(a) === true && Number.isNaN(b) === true) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (Number.isNaN(a) === false && Number.isNaN(b) === false && b !== 0) {
    res.status(200).json({ result: remainder(a, b) });
  }
  if (req.body.b === 0) {
    res.status(400);
    res.send({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.b || !req.body.a) {
    res.status(400);
    res.send({ error: 'Parameters "a" and "b" are required.' });
  }

  if (Number.isNaN(a) === true && Number.isNaN(b) === true) {
    res.status(400);
    res.send({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:n', (req, res) => {
  const n = parseInt(req.params.n);

  if (Number.isNaN(n) === false) {
    res.status(200).json({ result: isOdd(n) });
  } else {
    res.status(400);
    res.send({ error: 'Parameter must be a number.' });
  }
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const { string } = req.params;
  const { char } = req.params;

  if (char.length === 1) {
    res.status(200).json({ result: startsWith(char, string) });
  } else {
    res.status(400);
    res.send({ error: 'Parameter "character" must be a single character.' });
  }
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  const { array } = req.body;
  const { index } = req.params;

  res.status(200).json({ result: getNthElement(index, array) });
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: arrayToCSVString(array) });
});

app.post('/arrays/append', (req, res) => {
  const { array } = req.body;
  const element = req.body.value;

  res.status(200).json({ result: addToArray2(element, array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;

  if (req.query === {}) {
    const givenIndex = 0;
    res.status(200).json({ result: removeNthElement2(givenIndex, array) });
  }
  if (req.query !== {}) {
    res.status(200).json({ result: removeNthElement2(req.query.index, array) });
  }
});

module.exports = app;
