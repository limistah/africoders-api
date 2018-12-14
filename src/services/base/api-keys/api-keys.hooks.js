
// Hooks for service `apiKeys`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common');
// !code: imports // !end

// !code: used
// eslint-disable-next-line no-unused-vars
const { iff } = commonHooks;
// eslint-disable-next-line no-unused-vars
const {
  validateCreate,
  validateUpdate,
  validatePatch
} = require('./api-keys.validate');
// !end

// !code: init // !end

let moduleExports = {
  before: {
    // !code: before
    all: [],
    find: [],
    get: [],
    create: [validateCreate()],
    update: [validateUpdate()],
    patch: [validatePatch()],
    remove: []
    // !end
  },

  after: {
    // !code: after
    all: [],
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
    all: [],
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
