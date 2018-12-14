const SKIP = require('@feathersjs/feathers').SKIP;

module.exports = function() {
  return (context) => {
    const params = context.params;
    // Skips all the remaining hook after this
    return params && params.skipRemainingHooks ? SKIP : context;
  };
};
