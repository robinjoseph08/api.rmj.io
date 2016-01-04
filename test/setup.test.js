'use strict';

var Server = require('../app/server');

Server.register([
  require('inject-then')
], (err) => {
  if (err) {
    throw err;
  }
});
