const { authenticate } = require('@feathersjs/authentication').hooks;
const { NotAuthenticated } = require('@feathersjs/errors');
const verifyIdentity = authenticate('jwt');

function hasToken(hook) {
  return hook.params.headers.authorization || hook.data.accessToken;
}

module.exports = () => {
  return async (hook) => {
    try {
      return await verifyIdentity(hook);
    } catch (error) {
      if (error instanceof NotAuthenticated && !hasToken(hook)) {
        return hook;
      }

      throw error;
    }
  };
};
