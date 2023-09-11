const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
  res.send("i'm me, and you who is?");
});

module.exports = router;
