
const express = require('express');

const app = express();

const port = 3000;


app.get('/reactr/home', (req, res) => {
  res.send('Mi servidor en express.');
});

app.get('/reactr/products', (req, res) => {
  res.json([
    { name: 'product 1' },
    { name: 'product 2' },
    { name: 'product 3' }
  ]);
});




app.listen(port, () => {
  console.log('My port: ' + port);
});


