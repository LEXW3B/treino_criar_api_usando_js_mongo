const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'db_users';

const client = new MongoClient(url);

async function main() {
  console.info('Connecting to the database...');
  await client.connect();
  console.info('Database successfully connected');
  return client.db(dbName);
};

module.exports = main;