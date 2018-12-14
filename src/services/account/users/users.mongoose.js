
/* eslint quotes: 0 */
// Defines Mongoose model for service `users`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    emailVerified: Boolean,
    emailVerificationKey: String,
    gender: {
      type: String,
      enum: [
        "Male",
        "Female"
      ],
      required: true
    },
    ipAddress: {
      type: String,
      required: true
    },
    roleId: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    lastLoginAt: String,
    lastActivityAt: String,
    deletedAt: Number
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
