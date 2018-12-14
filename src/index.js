
/* eslint-disable no-console */
// Start the server. (Can be re-generated.)
// !code: preface // !end
const logger = require('./logger');
const app = require('./app');
// !code: imports // !end
// !code: init // !end

const port = app.get('port');
const server = app.listen(port);
// !code: init2
const seedInitData = require('./seed-init-data');
// !end

process.on('unhandledRejection', (reason, p) => {
  // !code: unhandled_rejection_log
  console.log(reason);
  logger.error('Unhandled Rejection at: Promise ', p, reason);
  // !end
  // !code: unhandled_rejection // !end
});

server.on('listening', async () => {
  // !<DEFAULT> code: listening_log
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port);
  // !end
  // !code: listening
  seedInitData(app);
  // !end
  // !code: listening1 // !end
});

// !code: funcs // !end
// !code: end // !end
