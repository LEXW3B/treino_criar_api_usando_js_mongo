const { ObjectId } = require('mongodb');
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

async function getOne(id) {
  const anime = await getCollection();

  if (!anime) return null;

  return await anime.findOne({ _id: new ObjectId(id) });
};

async function create(name) {
  const anime = await getCollection();

  if (!anime) return null;

  const { insertedId } = await anime.insertOne({ name });

  return { id: insertedId, name };
};

module.exports = {
  getAll,
  getOne,
  create,
};