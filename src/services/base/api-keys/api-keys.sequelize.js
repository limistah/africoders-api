
/* eslint quotes: 0 */
// Defines Sequelize model for service `apiKeys`. (Can be re-generated.)
const merge = require('lodash.merge');
const Sequelize = require('sequelize');
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    deviceName: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.TEXT
    },
    hits: {
      type: DataTypes.REAL
    },
    deletedAt: {
      type: DataTypes.REAL
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
