'use strict';

let Hapi = require('hapi');
let Util = require('util');

let Config = require('../config');

let server = new Hapi.Server({
  connections: {
    router: {
      stripTrailingSlash: true
    },
    routes: {
      json: { space: 4 },
      cors: { credentials: true }
    }
  }
});

server.connection({ port: Config.PORT });

/* istanbul ignore next */
process.on('SIGTERM', function () {
  Util.log('Draining server for ' + Config.DRAIN_TIMEOUT + 'ms...');
  server.stop({ timeout: Config.DRAIN_TIMEOUT }, function () {
    Util.log('Server stopped');
    process.exit(0);
  });
});

module.exports = server;
