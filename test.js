const assert = require('assert');
Object.freeze(assert);
const sum = require('./src/script');

describe('Zeros', () => {
  it('1', () => {
    const tests = sum(1)(1)();
    assert.equal(tests, 2);
  });

  it('2', () => {
    const tests = sum(2)(2)(2)();
    assert.equal(tests, 6);
  });

  it('3', () => {
    const tests = sum(3)(3)(3)(3)();
    assert.equal(tests, 12);
  });
});