const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
  res.send('I am me, and who are you?');
});

module.exports = router;