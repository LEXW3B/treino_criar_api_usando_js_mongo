/* eslint-disable no-console */
const { ObjectId } = require('mongodb');
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

async function getOne(id) {
  try {
    const login = await getLoginCollection();

    if (!login) return null;

    return login.findOne({ _id: new ObjectId(id) });
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function create(email, password) {
  try {
    const login = await getLoginCollection();

    if (!login) return null;

    const { insertedId } = await login.insertOne({ email, password });

    return insertedId;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  getAll,
  getOne,
  create,
};
