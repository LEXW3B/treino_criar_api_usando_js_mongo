const connect = require('../../../database/connect.db');

// singleton
let dbInstance = null;
let animeCollection = null;

async function getDB() {
  if (!dbInstance) {
    dbInstance = await connect();
  }
  return dbInstance;
};

async function getCollection() {
  if (!animeCollection) {
    const db = await getDB();
    animeCollection = db.collection('animes');
  }
  return animeCollection;
};

// CRUD
async function getAll() {
  const animes = await getCollection();

  if (!animes) return null;

  return await animes.find({}).toArray();
};

module.exports = {
  getAll,
};