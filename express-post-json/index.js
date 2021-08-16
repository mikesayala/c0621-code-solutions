const express = require('express');

const grades = {};
let nextId = 1;
const app = express();

app.listen(3000, () => {
});

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).json(grades[nextId]);
  nextId++;
});
