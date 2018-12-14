
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `users`. (Can be re-generated.)
const merge = require('lodash.merge');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      username: {
        minLength: 4,
        maxLength: 10,
        bsonType: "string"
      },
      email: {
        format: "email",
        bsonType: "string"
      },
      emailVerified: {
        bsonType: "boolean"
      },
      emailVerificationKey: {
        bsonType: "string"
      },
      gender: {
        enum: [
          "Male",
          "Female"
        ],
        bsonType: "string"
      },
      ipAddress: {
        format: "ipv4",
        bsonType: "string"
      },
      roleId: {
        bsonType: "string"
      },
      password: {
        bsonType: "string"
      },
      lastLoginAt: {
        format: "date-time",
        bsonType: "string"
      },
      lastActivityAt: {
        format: "date-time",
        bsonType: "string"
      },
      deletedAt: {
        chance: {
          integer: {
            min: -1,
            max: -1
          }
        },
        bsonType: "number"
      }
    },
    required: [
      "email",
      "password",
      "gender",
      "roleId",
      "username",
      "ipAddress"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
