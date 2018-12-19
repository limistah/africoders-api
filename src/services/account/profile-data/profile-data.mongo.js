
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `profileData`. (Can be re-generated.)
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
      firstname: {
        bsonType: "string"
      },
      userId: {
        bsonType: "string"
      },
      lastname: {
        bsonType: "string"
      },
      biography: {
        bsonType: "string"
      },
      website: {
        bsonType: "string"
      },
      location: {
        bsonType: "string"
      },
      dateOfBirth: {
        bsonType: "string"
      },
      avatarId: {
        bsonType: "string"
      },
      avatarDetails: {
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
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
