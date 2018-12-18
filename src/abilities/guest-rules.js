/* eslint-disable */
const { AbilityBuilder } = require('@casl/ability');

const rulesForActions = () => {
  let { rules, can, cannot } = AbilityBuilder.extract();
  can('read', 'users');
  can('read', 'roles');
  return rules;
};

const rulesForFields = () => {
  let { rules, can, cannot } = AbilityBuilder.extract();
  can('read', 'users');
  cannot('manage', 'users');
  cannot('manage', 'roles');
  cannot('read', 'histories');
  can('read', 'roles', ['_id', 'name', 'displayName', 'deletedAt']);
  cannot('manage', 'histories');
  return rules;
};

module.exports = {
  rulesForActions,
  rulesForFields
};
