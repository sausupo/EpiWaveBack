const express = require('express');
const usersRouter = express.Router();
const asyncHandler = require('express-async-handler')
const {getUser, addUser} = require('../methods/users');

usersRouter.get('/', asyncHandler(async({body, query, pg}, res) => {
  const result = await getUser(body, query, pg);

  res.send(result);
}))

usersRouter.post('/', asyncHandler(async({body, pg}, res) => {
  const result = await addUser(body, pg);

  res.send(result);
}));

module.exports = {
  usersRouter
};