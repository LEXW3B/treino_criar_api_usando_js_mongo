const express = require('express')
const animes = require('./animes.json');
const app = express();

app.use(express.json());

const port = 3000;

app.get('/api', (_req, res) => {
  res.send('funcionando!');
});

// read all
app.get('/api/animes', (_req, res) => {
  res.send(animes);
});

// read one
app.get('/api/anime/:id', (req, res) => {
  const id = req.params.id;
  const anime = animes[id - 1];

  if (!anime) {
    res.status(404).send({ message: 'anime not found'});
  };

  res.status(200).send(anime);
});

// create
app.post('/api/anime', (req, res) => {
  const anime = req.body;

  if (!anime || !anime.name || !anime.lançamento || !anime.status) {
    res.status(400).send({ message: 'anime invalid'});
    return;
  };

  animes.push(anime);
  res.status(201).send(anime);
});

// update
app.put('/api/anime/:id', (req, res) => {
  const id = req.params.id;
  const anime = req.body;

  if (!anime || !anime.name || !anime.lançamento || !anime.status) {
    res.status(400).send({ message: 'anime invalid'});
    return;
  };

  animes[id - 1] = anime;
  res.status(200).send(anime);
});

// delete
app.delete('/api/anime/:id', (req, res) => {
  const id = req.params.id;
  const anime = animes[id - 1];

  if (!anime) {
    res.status(404).send({ message: 'anime not found'});
  };

  delete animes[id - 1];
  res.status(200).send({ message: 'anime deleted'});
});

app.listen(port, () => {
  console.log(`server running on: http://localhost:${port}`);
});