const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
  console.log('Are ya ready kids? AYE AYE CAPTAIN');
});

const absolutePath = path.join('public', '__dirname');
console.log(absolutePath);

const staticExpress = express.static('public');

app.use(staticExpress);
