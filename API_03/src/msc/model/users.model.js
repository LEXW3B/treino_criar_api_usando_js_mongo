const { ObjectId } = require('mongodb');
const connect = require('../../db/connect');

async function getAll() {
  const db = await connect();
  const users = db.collection('users');

  if (!users) return null;

  const userList = await users.find({}).toArray(); 

  return userList;
}

async function getById(id) {
  const db = await connect();
  const users = db.collection('users');

  if (!users) return null;

  const user = await users.findOne({ _id: new ObjectId(id) });

  if (!user) return null;

  return user;
};

async function create(name) {
  const db = await connect();
  const users = db.collection('users');

  if (!users) return null;

  const { insertId } = await users.insertOne({ name });

  return { id: insertId, name };
};

async function update(id, name) {
  const db = await connect();
  const users = db.collection('users');

  if (!users) return null;

  const { modifiedCount } = await users.updateOne(
    { _id: new ObjectId(id) },
    { $set: { name }}
  );

  if (modifiedCount === 0) return null;

  return { id, name };
};

async function remove(id) {
  const db = await connect();
  const users = db.collection('users');

  if (!users) return null;

  const user = await users.findOne({ _id: new ObjectId(id) });

  if (!user) return null;

  await users.deleteOne({ _id: new ObjectId(id) });

  return user;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};