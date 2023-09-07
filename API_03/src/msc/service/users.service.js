const userModel = require('../model/users.model');

async function getAll() {
  const users = await userModel.getAll();

  if (!users || users.length === 0) return null;

  return users;
};

module.exports = {
  getAll,
};