const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
  res.send("I'm me, and you who are is?");
});

module.exports = router;
