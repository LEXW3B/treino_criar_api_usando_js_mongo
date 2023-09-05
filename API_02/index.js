const express = require('express')
const animes = require('./animes.json');
const app = express();
const port = 3000;

app.get('/api', (_req, res) => {
  res.send('funcionando!');
});

// read all
app.get('/api/animes', (_req, res) => {
  res.send(animes);
});

app.listen(port, () => {
  console.log(`server running on: http://localhost:${port}`);
});