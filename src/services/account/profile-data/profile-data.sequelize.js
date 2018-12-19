
/* eslint quotes: 0 */
// Defines Sequelize model for service `profileData`. (Can be re-generated.)
const merge = require('lodash.merge');
const Sequelize = require('sequelize');
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    firstname: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.TEXT
    },
    lastname: {
      type: DataTypes.TEXT
    },
    biography: {
      type: DataTypes.TEXT
    },
    website: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.TEXT
    },
    dateOfBirth: {
      type: DataTypes.TEXT
    },
    avatarId: {
      type: DataTypes.TEXT
    },
    avatarDetails: {
      type: DataTypes.TEXT
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
