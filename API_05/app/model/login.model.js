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

async function getCollection() {
  if (!loginCollection) {
    const dbCollection = await getDb();
    loginCollection = dbCollection.collection('login');
  }

  return loginCollection;
}

async function getAll() {
  const login = await getCollection();

  if (!login) return null;

  return login.find({}).toArray();
}

async function create(email, password) {
  const login = await getCollection();

  if (!login) return null;

  const { insertedId } = await login.insertOne({ email, password });

  return { id: insertedId, email, password };
}

module.exports = {
  getAll,
  create,
};
