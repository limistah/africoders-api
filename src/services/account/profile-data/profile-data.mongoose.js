
/* eslint quotes: 0 */
// Defines Mongoose model for service `profileData`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    firstname: String,
    userId: String,
    lastname: String,
    biography: String,
    website: String,
    location: String,
    dateOfBirth: String,
    avatarId: String,
    avatarDetails: String,
    deletedAt: Number
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
