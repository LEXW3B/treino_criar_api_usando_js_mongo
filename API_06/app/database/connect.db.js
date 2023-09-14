/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB_NAME;
const client = new MongoClient(url);

async function connect() {
  try {
    console.info('Connecting to MongoDB...');
    await client.connect();
    console.info('Connected to MongoDB!');

    return client.db(dbName);
  } catch (error) {
    console.error('connect', error);
    return null;
  }
}

module.exports = connect;
