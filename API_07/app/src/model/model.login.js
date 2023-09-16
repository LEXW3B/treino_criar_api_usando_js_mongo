/* eslint-disable no-console */
const connect = require('../../database/connect.db');

// singleton

let dbInstance = null;
let loginCollection = null;

async function getDb() {
  if (!dbInstance) {
    dbInstance = await connect();
  }

  return dbInstance;
}

async function getLoginCollection() {
  if (!loginCollection) {
    const dbMongo = await getDb();
    loginCollection = dbMongo.collection('login');
  }

  return loginCollection;
}

async function getAll() {
  try {
    const login = await getLoginCollection();

    if (!login) return null;

    return await login.find({}).toArray();
  } catch (error) {
    console.error('Model getAll:', error);
    return null;
  }
}

async function create(email, password) {
  try {
    const login = await getLoginCollection();

    if (!login) return null;

    const { insertedId } = await login.insertOne({ email, password });

    return {
      _id: insertedId,
      email,
      password,
    };
  } catch (error) {
    console.error('Model create:', error);
    return null;
  }
}

module.exports = {
  getAll,
  create,
};
