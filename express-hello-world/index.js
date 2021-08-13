const express = require('express');
const app = express();

app.use((req, res) => {
  res.send('The whale calls as the stomach grows fonder of such material goods');
});

app.listen(3000, () => {
});
