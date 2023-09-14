/* eslint-disable no-console */
const connect = require('../../database/connect.db');

// singleton
let dbInstance = null;
let loginCollection = null;

async function getDb() {
  if (!dbInstance) dbInstance = await connect();

  return dbInstance;
}

async function getLoginCollection() {
  if (!loginCollection) {
    const dbCollection = await getDb();
    loginCollection = dbCollection.collection('login');
  }

  return loginCollection;
}

async function getAll() {
  try {
    const login = await getLoginCollection();

    if (!login) return null;

    return login.find({}).toArray();
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  getAll,
};
