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

async function getOne(req, res) {
  const anime = await animeService.getOne(req.params.id);

  if (!anime) {
    res.status(404).json({ message: 'Anime not found' });

    return;
  }

  res.status(200).json(anime);
};

module.exports = {
  getAll,
  getOne,
};