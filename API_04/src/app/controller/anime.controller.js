require('express');
const animeService = require('../service/anime.service');

async function getAll(req, res) {
  const animes = await animeService.getAll();

  if (!animes || animes.length === 0) {
    res.status().json({ message: 'No animes found' });

    return;
  }

  res.status(200).json(animes);
};

module.exports = {
  getAll,
};