const express = require('express');
const tapsRouter = express.Router();
const {tap} = require('../methods/taps');

tapsRouter.post('/', async({body, pg}, res) => {
  try {
    const result = await tap(body, pg);

    res.send(result);
  } catch (_) {
    res.sendStatus(500);
  }
})

module.exports = {
  tapsRouter
};