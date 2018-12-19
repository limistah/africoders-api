const assert = require('assert');
const app = require('../../src/app');

describe('\'profileData\' service', () => {
  it('registered the service', () => {
    const service = app.service('profile-data');

    assert.ok(service, 'Registered the service');
  });
});
