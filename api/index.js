
const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;


app.use(cors());


app.get('/api', (req, res) => {
  res.send('Mi servidor en express.');
});

app.get('/api/products', (req, res) => {
  res.json([
    { name: 'product 1' },
    { name: 'product 2' },
    { name: 'product 3' }
  ]);
});




app.listen(port);


