const animeModule = require('../model/anime.model');

async function getAll() {
  const animes = await animeModule.getAll();

  if (!animes) return null;

  return animes;
};

module.exports = {
  getAll,
};