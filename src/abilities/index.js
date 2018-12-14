/* eslint-disable */
const { Ability } = require('@casl/ability');

const memberRules = require('./member-rules');
const guestRules = require('./guest-rules');
const moderatorRules = require('./moderator-rules');
const administratorRules = require('./administrator-rules');

// Aliases for feathers services method names.
Ability.addAlias('update', 'patch');
Ability.addAlias('read', ['get', 'find']);
Ability.addAlias('remove', 'delete');
Ability.addAlias('modify', ['update', 'patch']);
Ability.addAlias('create', 'add');
Ability.addAlias('manage', ['update', 'remove', 'patch']);

// Define abilities from here
function defineAbilitiesFor(user, roles) {
  // Get the id of the roles
  const member = roles['Member'];
  const moderator = roles['Moderator'];
  const administrator = roles['Administrator'];

  let rulesForRole = {
    rulesForActions: [],
    rulesForFields: []
  };

  // Permissions for the guests
  rulesForRole = guestRules;

  if (user) {
    switch (user.roleId) {
      // Only have additional power to moderate users
      case moderator:
        // Only have powers to moderate
        rulesForRole = moderatorRules;
        break;
      case administrator:
        // Should have powers of the administrators
        rulesForRole = administratorRules;
        break;
      case member:
        // Should have powers of all the members only
        rulesForRole = memberRules;
        break;
    }
  }

  return {
    actionsAbility: new Ability(rulesForRole.rulesForActions(user)),
    fieldsAbility: new Ability(rulesForRole.rulesForFields(user))
  };
}

module.exports = defineAbilitiesFor;
