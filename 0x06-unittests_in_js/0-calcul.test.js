const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
  it('should round 1 and 3 to 1 and 3, and return their sum as 4', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round 1 and 3.7 to 1 and 4, and return their sum as 5', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);  // Updated test case logic.
  });

  it('should round 1.2 and 3.7 to 1 and 4, and return their sum as 5', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round 1.5 and 3.7 to 2 and 4, and return their sum as 6', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should round 1.4 and 3.4 to 1 and 3, and return their sum as 4', function() {
    assert.strictEqual(calculateNumber(1.4, 3.4), 4);
  });

  it('should round -1.4 and -3.4 to -1 and -3, and return their sum as -4', function() {
    assert.strictEqual(calculateNumber(-1.4, -3.4), -4);
  });

  it('should round -1.5 and -3.7 to -2 and -4, and return their sum as -6', function() {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -6);
  });
});
