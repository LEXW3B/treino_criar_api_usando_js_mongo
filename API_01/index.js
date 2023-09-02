const express = require('express')
const { MongoClient, ObjectId } = require('mongodb');

// CONF MONGO
const url = 'mongodb://localhost:27017';
const nameDB = 'API_01';
const client = new MongoClient(url);

async function main() {
  console.info('Connecting to database...');
  await client.connect();
  console.info('Connected successfully!');

  const bd = client.db(nameDB);
  const collection = bd.collection('users');

  const app = express()
  app.use(express.json());
  const port = 3000

  app.get('/', (_req, res) => {
    res.send('Hello World!')
  })

  // READ ALL
  app.get('/users', async (_req, res) => {
    const users = await collection.find().toArray();

    if (!users) {
      res.status(404).send({ message: 'Users not found' });
    };

    res.status(200).send(users);
  });

  // READ ONE
  app.get('/users/:id', async(req, res) => {
    const { id } = req.params;
    const REGEX = /^[0-9a-fA-F]{24}$/;

    if (!REGEX.test(id)) {
      res.status(422).send({ message: 'Invalid id' });
      return;
    };

    const user = await collection.findOne({ _id: new ObjectId(id)});
  
    res.status(200).send(user);
  });

  // CREATE
  app.post('/users', async (req, res) => {
    const { name } = req.body;

    if (!name) {
      res.status(422).send({  message: 'Name is required' });
      return;
    };

    try {
      await collection.insertOne({ name });
      res.status(201).send({ message: 'User created successfully' });
      
    } catch (error) {
      console.info(error);
      res.status(500).send({ message: 'Error creating user' });
    };
  });

  // UPDATE
  app.put('/users/:id', async (req, res) => {
    const { id } =req.params;
    const {  name } = req.body;
    const REGEX = /^[0-9a-fA-F]{24}$/;

    if (!REGEX.test(id)) {
      res.status(422).send({ message: 'Invalid id' });
      return;
    };
    
    if (!name) {
      res.status(422).send({ message: 'Name is required' });
      return;
    };

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { name } }
    );

    res.status(200).send({ message: 'User updated successfully'});
  });

  // DELETE
  app.delete('/users/:id', async (req, res) => {
    const { id } =req.params;
    const REGEX = /^[0-9a-fA-F]{24}$/;

    if (!REGEX.test(id)) {
      res.status(422).send({ message: 'Invalid id' });
      return;
    };

    await collection.deleteOne({ _id: new ObjectId(id) });

    res.status(200).send({ message: 'User deleted successfully'});
  });

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
  });
}
main();