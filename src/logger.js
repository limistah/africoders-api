// Logger. (Can be re-generated.)
const { createLogger, format, transports } = require('winston');
// !code: imports
require('winston-mongodb');
// !end
// !code: init // !end

// Configure the Winston logger. For the complete documentation seee https://github.com/winstonjs/winston
const moduleExports = createLogger({
  // !code: level
  // To see more detailed errors, change this to debug'
  level: 'info',
  // !end
  // !code: format
  format: format.combine(format.splat(), format.simple()),
  // !end
  // !code: transport
  transports: [
    new transports.Console(),
    new transports.MongoDB({
      level: 'debug',
      db: 'mongodb://localhost:27017/africoders_api'
    })
  ]
  // !end
  // !code: moduleExports // !end
});
// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
