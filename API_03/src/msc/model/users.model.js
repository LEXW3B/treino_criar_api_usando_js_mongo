const connect = require('../../db/connect');

async function getAll() {
  const db = await connect();
  const users = db.collection('users');

  if (!users) return null;

  const userList = await users.find({}).toArray(); 

  return userList;
}

module.exports = {
  getAll,
};