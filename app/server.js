'use strict';

const Hapi = require('hapi');
const Util = require('util');

const Config = require('../config');

const server = new Hapi.Server({
  connections: {
    router: {
      stripTrailingSlash: true
    },
    routes: {
      json: { space: 2 },
      cors: { credentials: true }
    }
  }
});

server.connection({ port: Config.PORT });

server.register([
  require('hapi-bookshelf-serializer'),
  require('./plugins/features/regex')
], (err) => {
  /* istanbul ignore if */
  if (err) {
    throw err;
  }
})

/* istanbul ignore next */
process.on('SIGTERM', () => {
  Util.log(`Draining server for ${Config.DRAIN_TIMEOUT}ms...`);
  server.stop({ timeout: Config.DRAIN_TIMEOUT }, () => {
    Util.log('Server stopped');
    process.exit(0);
  });
});

module.exports = server;
