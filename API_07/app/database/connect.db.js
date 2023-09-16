/* eslint-disable no-console */
const { MongoClient } = require('mongodb');
require('dotenv').config();

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB_NAME;
const client = new MongoClient(url);

async function connect() {
  try {
    await client.connect();
    console.info('Conectado ao MongoDB!');
    return client.db(dbName);
  } catch (err) {
    console.error('Erro connect:', err);
    return null;
  }
}

// require('dotenv').config();

// async function connect() {
//   const { MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD } = process.env;

//   const mongodbUrl = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27018/login_db`;
//   const dbName = process.env.MONGO_DB_NAME;

//   try {
//     const client = new MongoClient(mongodbUrl);

//     if (!client) {
//       console.error('Erro ao conectar ao MongoDB!');
//       return null;
//     }

//     await client.connect();
//     console.info('Conectado ao MongoDB!');

//     return client.db(dbName);
//   } catch (err) {
//     console.error('Erro connect:', err);
//     return null;
//   }
// }

module.exports = connect;
