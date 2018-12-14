/* eslint-disable */
const { AbilityBuilder } = require('@casl/ability');

const rulesForActions = () => {
  let { rules, can, cannot } = AbilityBuilder.extract();
  can('read', 'users');
  return rules;
};

const rulesForFields = () => {
  let { rules, can, cannot } = AbilityBuilder.extract();
  can('read', 'users');
  cannot('manage', 'users');
  cannot('manage', 'roles');
  cannot('read', 'histories');
  cannot('manage', 'histories');
  return rules;
};

module.exports = {
  rulesForActions,
  rulesForFields
};
