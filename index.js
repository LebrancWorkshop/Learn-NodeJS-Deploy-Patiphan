const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8081, () => {
  console.log('Server running at http://localhost:8081');
});
