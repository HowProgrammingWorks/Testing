'use strict';

const assert = require('node:assert').strict;

// Convert IP string to number
//   ip <string> - IP address
// Returns: <number>
const ipToInt = (ip) => {
  if (typeof ip !== 'string') throw Error('String expected');
  if (ip === '') throw Error('Empty is not allowed');
  const parts = ip.split('.');
  if (parts.length !== 4) throw Error('Wrong IPv4 format');
  const nums = parts.map((n) => parseInt(n, 10));
  if (nums.includes(NaN)) throw Error('Wrong IPv4 format');
  return nums.reduce((res, item) => (res << 8) + item);
};

// Tests

const testLocalhost = () => {
  const n = ipToInt('127.0.0.1');
  assert.strictEqual(n, 2130706433, 'Localhost IP address');
};

const testPrivateNetork = () => {
  const n = ipToInt('10.0.0.1');
  assert.strictEqual(n, 167772161, 'Private class A network');
};

const testNegative = () => {
  const n = ipToInt('192.168.1.10');
  assert.strictEqual(n, -1062731510, 'Negative number');
};

const testFourZeros = () => {
  const n = ipToInt('0.0.0.0');
  assert.strictEqual(n, 0, 'Four zeros');
};

const testWrongString = () => {
  const n = ipToInt('wrong-string');
  assert.strictEqual(n, Number.NaN, 'Wrong string');
};

const testEmptyString = () => {
  const n = ipToInt('');
  assert.strictEqual(n, 0, 'Empty string');
};

const testFourEights = () => {
  const n = ipToInt('8.8.8.8');
  assert.strictEqual(n, 0x08080808, 'Four eights');
};

const tests = [
  testLocalhost,
  testPrivateNetork,
  testNegative,
  testFourZeros,
  testWrongString,
  testEmptyString,
  testFourEights,
];

for (const test of tests) {
  try {
    test();
  } catch (err) {
    console.log(err);
  }
}
