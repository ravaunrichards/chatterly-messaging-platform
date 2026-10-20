'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { app, server } = require('../server');
const { once } = require('node:events');

test('health endpoint reports a healthy API', async (t) => {
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => server.close());
  const address = server.address();
  const res = await fetch(`http://127.0.0.1:${address.port}/api/health`);
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.ok, true);
  assert.equal(body.service, 'Chatterly API');
});
