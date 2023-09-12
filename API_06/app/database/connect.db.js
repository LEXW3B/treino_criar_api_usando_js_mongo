/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.DB_URL;
const dbName = process.env.MONGO_DB_NAME;
const client = new MongoClient(url);

async function connectDB() {
  try {
    console.info('connecting to database...');
    await client.connect();
    console.info('connected to database!');

    return client.db(dbName);
  } catch (error) {
    console.info('ERRO: db connection', error.stack);
  }

  return null;
}

module.exports = connectDB;
