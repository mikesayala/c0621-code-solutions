const data = require('./data.json');
const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3000, () => {
});

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (const key in data.notes) {
    notes.push(data.notes[key]);
  }
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  let note = {};
  const id = req.params.id;
  if (req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (req.params.id) {
    note = data.notes[req.params.id];
    if (note === undefined) {
      res.status(404).json({ error: 'cannot find note with id ' + id });
    }
  }
  res.json(note);
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is required field' });
  } else if (req.body.content) {
    const newNote = {};
    newNote.id = data.nextId;
    newNote.content = req.body.content;
    data.notes[data.nextId] = newNote;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });

      }
    });
    res.status(201).json(newNote);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const note = data.notes[req.params.id];
  if (req.params.id < 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (note === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else if (data.notes[id]) {
    delete data.notes[req.params.id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).send();
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (id < 0 || !req.body.content) {
    if (id < 0) {
      res.status(400).json({ error: 'id must be positive integer' });
    } else {
      res.status(400).json({ error: 'request must have content' });
    }
  } else if (!data.notes[id]) {
    res.status(404).json({ error: 'cannot find note with id ' + id });
  } else if (data.notes[id]) {
    data.notes[id].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).send();
      }
    });
  }
});
