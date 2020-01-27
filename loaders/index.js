const swaggerLoader = require('./swagger');
const expressLoader = require('./express');

async function init(expressApp) {
  swaggerLoader(expressApp);
  expressLoader(expressApp);
}

module.exports = {
  init
};
