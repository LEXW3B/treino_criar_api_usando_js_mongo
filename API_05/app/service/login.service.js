const loginModel = require('../model/login.model');

async function getAll() {
  const login = await loginModel.getAll();

  if (!login || login.length === 0) return null;

  return login;
}

module.exports = {
  getAll,
};
