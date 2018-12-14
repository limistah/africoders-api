const utils = require('./../factory/utils');

module.exports = () => {
  return (context) => {
    const authPath = context.app.get('authentication').path;
    const protectedPathTest = utils.isProtectedPath(context);
    const userCreateTest =
      context.method === 'create' && context.path === 'users';
    const authPathTest = authPath === `/${context.path}`;
    return !authPathTest && !protectedPathTest && !userCreateTest;
  };
};
