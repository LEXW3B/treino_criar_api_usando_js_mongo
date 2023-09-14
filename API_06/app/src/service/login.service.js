/* eslint-disable no-console */
const loginModel = require('../model/login.model');

async function getAll() {
  try {
    const login = await loginModel.getAll();

    if (!login) return null;

    return login;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  getAll,
};
