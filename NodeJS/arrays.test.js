'use strict';

const test = require('node:test');
const assert = require('node:assert');

const arrays = require('./arrays.js');

test('Example 3', (text) => {
  assert.strictEqual(typeof arrays.sample([1, 2, 3]), 'number');
});

test('Example 4', async (text) => {
  assert.strictEqual(arrays.shuffle([1, 2, 3]).length, 3);
});
