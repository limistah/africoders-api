
/* eslint quotes: 0 */
// Defines Sequelize model for service `users`. (Can be re-generated.)
const merge = require('lodash.merge');
const Sequelize = require('sequelize');
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes;
// !code: imports // !end
// !code: init // !end

// Your model may need the following fields:
//   email:      { type: DataTypes.STRING, allowNull: false, unique: true },
//   password:   { type: DataTypes.STRING, allowNull: false },
let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      unique: true,
      allowNull: false
    },
    emailVerified: {
      type: DataTypes.BOOLEAN
    },
    emailVerificationKey: {
      type: DataTypes.TEXT
    },
    gender: {
      type: Sequelize.ENUM(["Male","Female"]),
      allowNull: false
    },
    ipAddress: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    roleId: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lastLoginAt: {
      type: DataTypes.DATE
    },
    lastActivityAt: {
      type: DataTypes.DATE
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
