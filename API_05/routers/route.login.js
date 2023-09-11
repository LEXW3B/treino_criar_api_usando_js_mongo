const express = require('express');

const router = express.Router();
const loginController = require('../app/controller/login.controller');

router.get('/', (_req, res) => {
  res.send("i'm me, and you who is?");
});

router.get('/login', loginController.getAll);

module.exports = router;
