
// Define the Feathers schema for service `roles`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !code: schema_header
  title: 'Roles',
  description: 'User Roles database.',
  // !end
  // !code: schema_definitions // !end

  // Required fields.
  required: [
    // !code: schema_required
    'name',
    'displayName'
    // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    name: { minLength: 3, maxLength: 15, faker: 'lorem.word' },
    displayName: { minLength: 3, maxLength: 15, faker: 'lorem.word' },
    weight: { type: 'number', chance: 'integer' },
    deletedAt: { type: 'number', chance: { integer: { min: -1, max: -1 } } }
    // !end
  },
  // !code: schema_more // !end
};

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
    name: 'Role',
    service: {
      sort: { _id: 1 }
    },
    // sql: {
    //   sqlTable: 'Roles',
    //   uniqueKey: '_id',
    //   sqlColumn: {
    //     __authorId__: '__author_id__',
    //   },
    // },
    // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !<DEFAULT> code: graphql_add
      // __author__: { type: '__User__!', args: false, relation: { ourTable: '__authorId__', otherTable: '_id' } },
      // !end
    },
    // !code: graphql_more // !end
  },
};

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
