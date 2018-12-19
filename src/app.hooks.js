
// Application hooks that run for every service. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');
// eslint-disable-next-line no-unused-vars
const authenticate = require('./hooks/authenticate');
// eslint-disable-next-line no-unused-vars
const authorizeUserAction = require('./hooks/authorize-user-action');
// eslint-disable-next-line no-unused-vars
const escapeAuthCheck = require('./hooks/escape-auth-check');
// eslint-disable-next-line no-unused-vars
const logToHistory = require('./hooks/log-to-history');
// eslint-disable-next-line no-unused-vars
const skipRemainingHook = require('./hooks/skip-remaining-hook');
// eslint-disable-next-line no-unused-vars
const validateApiKey = require('./hooks/validate-api-key');
// !<DEFAULT> code: imports
const log = require('./hooks/log');
// !end

// !code: used
// eslint-disable-next-line no-unused-vars
const { iff, isProvider, softDelete2, when, removeQuery } = commonHooks;
// !end
// !code: init
// const shouldLogToHistory = () => {
//   return iff(isProvider('external'), logToHistory());
// };
const runOnExternal = (hook = () => {}, params = []) => {
  return iff(isProvider('external'), hook.call(null, ...params));
};
const shouldAuthorizeAction = () => {
  return when(escapeAuthCheck(), authenticate(), authorizeUserAction({}));
};
const shouldAllowApiKeyEndpoints = () => {
  return (context) => {
    return isProvider('external')(context) && escapeAuthCheck()(context);
  };
};

// !end

let moduleExports = {
  before: {
    // !code: before
    all: [
      log(),
      iff(shouldAllowApiKeyEndpoints(), validateApiKey()),
      removeQuery('apiKey'),
      runOnExternal(logToHistory),
      runOnExternal(shouldAuthorizeAction),
      softDelete2()
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  after: {
    // !code: after
    all: [
      log(),
      runOnExternal(logToHistory)
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  error: {
    // !code: error
    all: [log(), runOnExternal(logToHistory)],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
