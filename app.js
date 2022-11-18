const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Bienvenidos a la Api de E-Mercado');
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'emercado-api-main', 'cart', 'buy.json'));
});

app.get('/cats', (req, res) => {
  res.sendFile(path.join(__dirname, 'emercado-api-main', 'cats', 'cat.json'));
});

app.get('/cats_products/:cat', (req, res) => {
  const cat = req.params.cat;
  res.sendFile(
    path.join(__dirname, 'emercado-api-main', 'cats_products', `${cat}.json`)
  );
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  res.sendFile(
    path.join(__dirname, 'emercado-api-main', 'products', `${id}.json`)
  );
});

app.get('/products_comments/:id', (req, res) => {
  const id = req.params.id;
  res.sendFile(
    path.join(__dirname, 'emercado-api-main', 'products_comments', `${id}.json`)
  );
});

app.get('/sell', (req, res) => {
  res.sendFile(
    path.join(__dirname, 'emercado-api-main', 'sell', 'publish.json')
  );
});

app.get('/user_cart/:id', (req, res) => {
  const id = req.params.id;
  res.sendFile(
    path.join(__dirname, 'emercado-api-main', 'user_cart', `${id}.json`)
  );
});

app.listen(PORT, () => {
  console.log(`Server Listen on Port:${PORT}`);
});
