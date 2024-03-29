'use strict';

const test = require('node:test');
const assert = require('node:assert');

const utils = require('./utils.js');

test('Example 1', (test) => {
  assert.strictEqual(utils.add(4, 1), 5);
  assert.strictEqual(utils.sub(5, 2), 3);
});

test('Example 2', async (test) => {
  assert.strictEqual(utils.add(4, 1), 5);
  assert.strictEqual(utils.sub(5, 2), 3);
});
