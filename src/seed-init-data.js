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
};
