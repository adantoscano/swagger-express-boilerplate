require('dotenv').config();
const debug = require('debug')('app');
const express = require('express');

const loaders = require('./loaders');

const port = process.env.PORT || 3000;

async function startServer() {
  const app = express();

  await loaders.init(app);

  app.listen(port, err => {
    if (err) {
      debug(err);
      return;
    }
    debug(`Example app listening on port ${port}!`);
  });
}

startServer();
