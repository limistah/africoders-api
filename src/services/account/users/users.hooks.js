const populateProfileData = require('./hooks/populate-profile-data');

const {
  hashPassword,
  protect
} = require('@feathersjs/authentication-local').hooks;

const {
  validateCreate,
  validateUpdate,
  validatePatch
} = require('./users.validate');

// !code: init // !end

let moduleExports = {
  before: {
    // Your hooks should include:
    //   find  : authenticate('jwt')
    //   get   : authenticate('jwt')
    //   create: hashPassword()
    //   update: hashPassword(), authenticate('jwt')
    //   patch : hashPassword(), authenticate('jwt')
    //   remove: authenticate('jwt')
    // !code: before
    all: [],
    find: [],
    get: [],
    create: [validateCreate(), hashPassword(), populateProfileData()],
    update: [validateUpdate(), hashPassword()],
    patch: [validatePatch(), hashPassword()],
    remove: []
    // !end
  },

  after: {
    // Your hooks should include:
    //   all   : protect('password') /* Must always be the last hook */
    // !code: after
    all: [protect('password') /* Must always be the last hook */],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  error: {
    // !<DEFAULT> code: error
    all: [],
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
