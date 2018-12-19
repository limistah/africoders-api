
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const { checkContext, getItems, replaceItems } = require('feathers-hooks-common');

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {

  // Return the actual hook.
  return async (context) => {
    // Throw if the hook is being called from an unexpected location.
    checkContext(context, null, ['create']);
    // Create a profile data for the new user
    // getItems always returns an array to simplify your processing.
    const records = getItems(context);
    if (Array.isArray(records)) {
      for (let i = 0; i < records.length; i++) {
        const element = records[i];
        const data = {userId: element._id.toString()};
        const result = await context.app.service('/profile-data').create(data);
        // Sets the profile data id
        element.profileDataId = result._id.toString();
      }
    } else {

      const data = {userId: records._id.toString()};
      const result = await context.app.service('/profile-data').create(data);
      // Sets the profile data id
      records.profileDataId = result._id.toString();
    }
    // Place the modified records back in the context.
    replaceItems(context, records);
    // Best practice: hooks should always return the context.
    return context;
  };
};

// Throw on unrecoverable error.
// eslint-disable-next-line no-unused-vars
function error(msg) {
  throw new Error(msg);
}
