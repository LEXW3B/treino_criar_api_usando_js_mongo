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

async function getOne(email) {
  const login = await getCollection();

  if (!login) return null;

  return login.findOne(email);
}

async function create(email, password) {
  const login = await getCollection();

  if (!login) return null;

  const existingUser = await getOne({ email });

  if (existingUser) {
    throw new Error('Email já está em uso model');
  }

  const { insertedId } = await login.insertOne({ email, password });

  return { id: insertedId, email, password };
}

module.exports = {
  getAll,
  getOne,
  create,
};
