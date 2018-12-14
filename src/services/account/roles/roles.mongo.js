
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `roles`. (Can be re-generated.)
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
      name: {
        minLength: 3,
        maxLength: 15,
        faker: "lorem.word",
        bsonType: "string"
      },
      displayName: {
        minLength: 3,
        maxLength: 15,
        faker: "lorem.word",
        bsonType: "string"
      },
      weight: {
        chance: "integer",
        bsonType: "number"
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
      "name",
      "displayName"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
