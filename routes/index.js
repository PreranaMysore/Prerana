'use-strict';
const express = require('express');
const router = express.Router();
const errors = require('../helpers/errors');

router.get('/app', (req, res) => {
  res.send('Hello');
});




module.exports = router;
