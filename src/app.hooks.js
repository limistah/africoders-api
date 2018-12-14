// Application hooks that run for every service. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');
// eslint-disable-next-line no-unused-vars
const logToHistory = require('./hooks/log-to-history');
// !<DEFAULT> code: imports
const log = require('./hooks/log');
// !end

// !code: used
// eslint-disable-next-line no-unused-vars
const { iff, isProvider, softDelete2 } = commonHooks;
// !end
// !code: init
// const shouldLogToHistory = () => {
//   return iff(isProvider('external'), logToHistory());
// };
const runOnExternal = (hook = () => {}, params = []) => {
  return iff(isProvider('external'), hook.call(null, ...params));
};
// !end

let moduleExports = {
  before: {
    // !code: before
    all: [log(), runOnExternal(logToHistory), runOnExternal(softDelete2)],
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
    all: [log(), runOnExternal(logToHistory)],
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
  }
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
