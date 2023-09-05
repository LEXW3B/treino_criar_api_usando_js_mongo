const express = require('express')
const { MongoClient, ObjectId } = require('mongodb');

const animes = require('./animes.json');

// conf. mongo
const url = 'mongodb://localhost:27017';
const dbName = 'db_animes';
const client = new MongoClient(url);

async function main() {
  console.info('Connecting to the database...');
  await client.connect((err) => {
    if (err) {
      console.info('Error connecting to database');
      return;
    };
  });
  console.info('Database successfully connected');


  const db = client.db(dbName);
  const collection = db.collection('animes');


  const app = express();
  app.use(express.json());
  const port = 3000;

  app.get('/api', (_req, res) => {
    res.send('funcionando!');
  });

  // read all
  app.get('/api/animes', async (_req, res) => {
    const animes = await collection.find({}).toArray();

    if (!animes) {
      res.status(404).send({ message: 'animes not found'});
    };

    res.status(200).send(animes)
  });

  // read one
  app.get('/api/anime/:id', async (req, res) => {
    const { id } = req.params;
    const REGEX = /^[0-9a-fA-F]{24}$/;

    if (!REGEX.test(id)) {
      res.status(404).send({ message: 'anime not found'});
    };

    const anime = await collection.findOne({ _id: new ObjectId(id) });

    res.status(200).send(anime);
  });

  // create
  app.post('/api/anime', async (req, res) => {
    const anime = req.body;
    const { name, lançamento, status } = req.body;

    if (!name || !lançamento || !status) {
      res.status(400).send({ message: 'anime invalid'});
      return;
    };

    try {
      await collection.insertOne({ anime });
      res.status(201).send({ message: 'anime created'})
    } catch (error) {
      console.info(error);
      res.status(500).send({ message: 'internal server error'})
    }
  });

  // update
  app.put('/api/anime/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const anime = req.body;

      const updateAnime = await collection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { anime } },
      );

      if (!updateAnime) {
        res.status(404).send({ message: 'anime not found'});
      };

      res.status(200).send({ message: 'anime updated'});

    } catch (error) {
      console.info(error);
      res.status(500).send({ message: 'internal server error'})
    }
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
};

main();