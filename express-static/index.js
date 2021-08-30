const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
  console.log('Are ya ready kids? AYE AYE CAPTAIN');
});

const absolutePath = path.join(__dirname, 'public');
console.log(absolutePath);

const staticExpress = express.static(absolutePath);

app.use(staticExpress);
