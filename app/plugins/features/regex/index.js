'use strict';

let Controller = require('./controller');

exports.register = (server, options, next) => {

  server.route([{
    method: 'GET',
    path: '/regex',
    config: {
      handler: (request, reply) => {
        reply(Controller.list());
      }
    }
  }]);

  next();

};

exports.register.attributes = {
  name: 'regex'
};
