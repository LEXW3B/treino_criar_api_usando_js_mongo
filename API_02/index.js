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

//read one
app.get('/api/animes/:id', (req, res) => {
  const id = req.params.id;
  const anime = animes[id - 1];

  if (!anime) {
    res.status(404).send({ message: 'anime not found'});
  };

  res.status(200).send(anime);
});

app.listen(port, () => {
  console.log(`server running on: http://localhost:${port}`);
});