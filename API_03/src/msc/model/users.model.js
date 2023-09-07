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

module.exports = {
  getAll,
  getById,
};