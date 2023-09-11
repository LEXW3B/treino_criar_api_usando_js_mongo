const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DBNAME;
const client = new MongoClient(url);

async function connect() {
  console.info('Connecting to MongoDB...');
  await client.connect();
  console.info('Connected to MongoDB!');

  return client.db(dbName);
};

module.exports = connect;