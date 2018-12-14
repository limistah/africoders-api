
// Configure the Feathers services. (Can be re-generated.)
let apiKeys = require('./base/api-keys/api-keys.service');
let histories = require('./base/histories/histories.service');
let roles = require('./account/roles/roles.service');
let users = require('./account/users/users.service');

// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(apiKeys);
  app.configure(histories);
  app.configure(roles);
  app.configure(users);
  // !code: func_return // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
