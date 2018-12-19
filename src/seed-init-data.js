const seeder = async (service, data, findParams = {}, sameTotal = false) => {
  let results = await service.find(findParams);
  // If both retuls total and data length is false || result.total is not truthy
  // checking for inequality to make sure that subsequent seeds do not run in case of the seeded document was deleted.
  if (
    (sameTotal && Array.isArray(data) && data.length < results.total) ||
    (!sameTotal && !results.total)
  ) {
    results = await service.create(data);
  }
  return results.data || results;
};
module.exports = async (app) => {
  // Seeds Roles
  const roleData = await seeder(
    app.service('/roles'),
    app.get('supportedRoles'),
    {},
    true
  );
  // Get the admin role _id
  // eslint-disable-next-line
  const { _id: adminRoleId } = await roleData.find(
    (d) => d.name === 'Administrator'
  );

  let adminUser = app.get('adminUser');
  const pass = adminUser.password;
  adminUser.roleId = adminRoleId.toString();
  adminUser = await seeder(app.service('/users'), adminUser, {username: adminUser.username});
  // sets the data correctly
  adminUser = adminUser.username ? adminUser : adminUser[0];
  // eslint-disable-next-line
  console.log(`User '${adminUser.username}:${pass}' has been created`);
  let apiKeyData = {deviceName: 'generic'};
  apiKeyData = await seeder(app.service('/api-keys'), apiKeyData, apiKeyData);
  // sets the data correctly
  apiKeyData = apiKeyData.deviceName ? apiKeyData : apiKeyData[0];
  // eslint-disable-next-line
  console.log(`Generic API KEY: '${apiKeyData.key}'`);
};
