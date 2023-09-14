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

async function getOne(id) {
  try {
    const login = await loginModel.getOne(id);

    if (!login) return null;

    return login;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function create(email, password) {
  try {
    const login = await loginModel.create(email, password);

    if (!login) return null;

    return login;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function remove(id) {
  try {
    const login = await loginModel.remove(id);

    if (!login) return null;

    return login;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  getAll,
  getOne,
  create,
  remove,
};
