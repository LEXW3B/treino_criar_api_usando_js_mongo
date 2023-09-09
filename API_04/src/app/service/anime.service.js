const animeModel = require('../model/anime.model');

async function getAll() {
  const animes = await animeModel.getAll();

  if (!animes) return null;

  return animes;
};

async function getOne(id) {
  const anime = await animeModel.getOne(id);

  if (!anime) return null;

  return anime;
};

async function create(name) {
  const anime = await animeModel.create(name);

  if (!anime) return null;

  return { id: anime.insertedId, name };
};

module.exports = {
  getAll,
  getOne,
  create,
};