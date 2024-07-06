const express = require('express');
const tapsRouter = express.Router();
const {tap} = require('../methods/taps');

tapsRouter.post('/', ({body, pg}, res) => {
  try {
    tap(body, pg);
  } catch (_) {
    res.sendStatus(500);
  }
})

module.exports = {
  tapsRouter
};