const express = require('express')
const swaggerUi = require('swagger-ui-express');
const knex = require('knex');
const config = require('./database/knexfile');
const {usersRouter, tapsRouter} = require('./routers');

const path = require('path');
const YAML = require('yamljs')

const swaggerDocument = YAML.load(path.join(__dirname, 'spec', 'root.yaml'));

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use('*', (req, res, next) => {
  req.pg = new knex(config.development);
  next();
});

app.use('/users', usersRouter);
app.use('/taps', tapsRouter);

app.listen(3000)