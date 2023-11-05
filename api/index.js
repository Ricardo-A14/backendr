
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;


app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

// Manejo de todas las solicitudes para redirigirlas a index.html (excepto las rutas de la API)
app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    // Las rutas de la API se manejarán por separado
    return next();
  }
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Manejo de rutas de la API
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


