const userModel = require('../model/users.model');

async function getAll() {
  const users = await userModel.getAll();

  if (!users || users.length === 0) return null;

  return users;
};

async function getById(id) {
  const user = await userModel.getById(id);

  if (!user) return null;

  return user;
};

async function create(name) {
  const { id } = await userModel.create(name);

  if (!id) return null;

  return { id, name};
};

module.exports = {
  getAll,
  getById,
  create,
};