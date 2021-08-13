const data = require('./data.json');
const fs = require('fs');
if (process.argv[2] === 'read') {
  for (const key in data.notes) {
    console.log(key + ':', data.notes[key]);
  }
}

if (process.argv[2] === 'create') {
  const userInput = process.argv[3];
  const nextId = data.nextId;
  data.notes[nextId] = userInput;
  data.nextId++;
}

if (process.argv[2] === 'delete') {
  const id = process.argv[3];
  delete data.notes[id];
}

if (process.argv[2] === 'update') {
  const updatedNote = process.argv[4];
  const id = process.argv[3];
  data.notes[id] = updatedNote;
}

fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
  if (err) throw err;
});
