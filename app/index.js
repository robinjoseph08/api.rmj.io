'use strict';

let Util = require('util');

let Config = require('../config');
let Auth   = require('./server');

Auth.start(function () {
  Util.log('Server started on port:' + Config.PORT);
});
